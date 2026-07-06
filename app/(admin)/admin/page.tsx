import { db } from "@/db"
import { projects } from "@/db/schema"
import { eq } from "drizzle-orm"
import { archiveProject, deleteProject, unarchiveProject } from "./actions"

const AdminPage = async () => {
  const codeProjects = await db
    .select()
    .from(projects)
    .where(eq(projects.type, "code"))
  return (
    <section className="admin w-full h-full p-6 overflow-y-auto bg-white sm:bg-background">
      <div className="min-h-full flex items-center content-1600 justify-center">
        <div className="w-full bg-white sm:p-6 rounded-2xl sm:shadow-md flex flex-col gap-2 md:gap-4 max-w-[1200px]">
          <div className="text-3xl font-bold">Projects</div>
          <div className="text-2xl font-bold">Code</div>
          <a href="/admin/projects/new">+ New Project</a>
          <ul>
            {codeProjects.map((project) => (
              <li key={project.id}>
                <span>{project.title}</span>
                <span>{project.archived ? "archived" : "live"}</span>
                <a href={`/admin/projects/${project.id}`}>Edit</a>
                {project.archived ? (
                  <form action={unarchiveProject} style={{ display: "inline" }}>
                    <input type="hidden" name="id" value={project.id} />
                    <button type="submit">Unarchive</button>
                  </form>
                ) : (
                  <form action={archiveProject} style={{ display: "inline" }}>
                    <input type="hidden" name="id" value={project.id} />
                    <button type="submit">Archive</button>
                  </form>
                )}
                <form action={deleteProject} style={{ display: "inline" }}>
                  <input type="hidden" name="id" value={project.id} />
                  <button type="submit">Delete</button>
                </form>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default AdminPage
