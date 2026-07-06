"use server"

import { redirect } from "next/navigation"
import { db } from "@/db"
import { eq } from "drizzle-orm"
import { projects, projectTechnologies } from "@/db/schema"

const updateProject = async (id: number, formData: FormData) => {
  const now = Date.now()

  // Update project values
  await db
    .update(projects)
    .set({
      title: formData.get("title") as string,
      slug: formData.get("slug") as string,
      descriptionTop: formData.get("descriptionTop") as string,
      descriptionBottom: (formData.get("descriptionBottom") as string) || null,
      note: (formData.get("note") as string) || null,
      repo: (formData.get("repo") as string) || null,
      www: (formData.get("www") as string) || null,
      responsive: formData.get("responsive") === "on" ? 1 : 0,
      updatedAt: now,
    })
    .where(eq(projects.id, id))

  // Delete existing project technologies from join table
  await db
    .delete(projectTechnologies)
    .where(eq(projectTechnologies.projectId, id))

  const techIds = formData.getAll("technologies").map(Number)
  if (techIds.length > 0) {
    await db
      .insert(projectTechnologies)
      .values(techIds.map((technologyId) => ({ projectId: id, technologyId })))
  }

  redirect("/admin")
}

export { updateProject }
