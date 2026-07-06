import { db } from "@/db"
import { projects, technologies, projectTechnologies } from "@/db/schema"
import { eq } from "drizzle-orm"
import { notFound } from "next/navigation"

import { updateProject } from "./actions"

const EditProjectPage = async ({
  params,
}: {
  params: Promise<{ id: string }>
}) => {
  const { id } = await params

  const [project] = await db
    .select()
    .from(projects)
    .where(eq(projects.id, Number(id)))

  if (!project) notFound()

  const allTechnologies = await db.select().from(technologies)

  const projectTechIds = (
    await db
      .select()
      .from(projectTechnologies)
      .where(eq(projectTechnologies.projectId, project.id))
  ).map((pt) => pt.technologyId)

  const updateProjectWithId = updateProject.bind(null, project.id)

  return (
    <section className="project-edit w-full h-full p-6 overflow-y-auto bg-white sm:bg-background">
      <div className="min-h-full flex items-center content-1600 justify-center">
        <div className="w-full bg-white sm:p-6 rounded-2xl sm:shadow-md flex flex-col gap-2 md:gap-4 max-w-[1200px]">
          <div className="text-3xl font-bold">Edit Code Project</div>
          <div className="text-2xl font-bold">{project.title}</div>
          <form action={updateProjectWithId}>
            <div>
              <label>Title</label>
              <input
                name="title"
                type="text"
                defaultValue={project.title}
                required
              />
            </div>
            <div>
              <label>Slug</label>
              <input
                name="slug"
                type="text"
                defaultValue={project.slug}
                required
              />
            </div>
            <div>
              <label>Description (top)</label>
              <textarea
                name="descriptionTop"
                defaultValue={project.descriptionTop ?? ""}
                required
              />
            </div>
            <div>
              <label>Description (bottom)</label>
              <textarea
                name="descriptionBottom"
                defaultValue={project.descriptionBottom ?? ""}
              />
            </div>
            <div>
              <label>Note</label>
              <input
                name="note"
                type="text"
                defaultValue={project.note ?? ""}
              />
            </div>
            <div>
              <label>Repo</label>
              <input
                name="repo"
                type="text"
                defaultValue={project.repo ?? ""}
              />
            </div>
            <div>
              <label>WWW</label>
              <input name="www" type="text" defaultValue={project.www ?? ""} />
            </div>
            <div>
              <label>Responsive</label>
              <input
                name="responsive"
                type="checkbox"
                defaultChecked={project.responsive === 1}
              />
            </div>
            <div>
              <label>Technologies</label>
              <div>
                {allTechnologies.map((tech) => (
                  <label key={tech.id}>
                    <input
                      name="technologies"
                      type="checkbox"
                      value={tech.id}
                      defaultChecked={projectTechIds.includes(tech.id)}
                    />
                    {tech.label}
                  </label>
                ))}
              </div>
            </div>
            <button type="submit">Save</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default EditProjectPage
