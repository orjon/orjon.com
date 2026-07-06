"use server"

import { redirect } from "next/navigation"
import { db } from "@/db"
import { eq } from "drizzle-orm"
import { projects, projectTechnologies } from "@/db/schema"

const deleteProject = async (formData: FormData) => {
  const id = Number(formData.get("id"))

  await db
    .delete(projectTechnologies)
    .where(eq(projectTechnologies.projectId, id))
  await db.delete(projects).where(eq(projects.id, id))

  redirect("/admin")
}

const archiveProject = async (formData: FormData) => {
  const id = Number(formData.get("id"))

  await db
    .update(projects)
    .set({
      archived: 1,
      updatedAt: Date.now(),
    })
    .where(eq(projects.id, id))

  redirect("/admin")
}

const unarchiveProject = async (formData: FormData) => {
  const id = Number(formData.get("id"))

  await db
    .update(projects)
    .set({
      archived: 0,
      updatedAt: Date.now(),
    })
    .where(eq(projects.id, id))

  redirect("/admin")
}

export { deleteProject, archiveProject, unarchiveProject }
