import { db } from "@/db"
import { technologies } from "@/db/schema"
import { createProject } from "./actions"

const NewProjectPage = async () => {
  const allTechnologies = await db.select().from(technologies)

  return (
    <section className="project-new w-full h-full p-6 overflow-y-auto bg-white sm:bg-background">
      <div className="min-h-full flex items-center content-1600 justify-center">
        <div className="w-full bg-white sm:p-6 rounded-2xl sm:shadow-md flex flex-col gap-2 md:gap-4 max-w-[1200px]">
          <div className="text-3xl font-bold">New Code Project</div>
          <form action={createProject}>
            <div>
              <label>Title</label>
              <input name="title" type="text" required />
            </div>
            <div>
              <label>Slug</label>
              <input name="slug" type="text" required />
            </div>
            <div>
              <label>Description (top)</label>
              <textarea name="descriptionTop" required />
            </div>
            <div>
              <label>Description (bottom)</label>
              <textarea name="descriptionBottom" />
            </div>
            <div>
              <label>Note</label>
              <input name="note" type="text" />
            </div>
            <div>
              <label>Repo</label>
              <input name="repo" type="text" />
            </div>
            <div>
              <label>WWW</label>
              <input name="www" type="text" />
            </div>
            <div>
              <label>Responsive</label>
              <input name="responsive" type="checkbox" />
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
                    />
                    {tech.label}
                  </label>
                ))}
              </div>
            </div>
            <button type="submit">Create Project</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default NewProjectPage
