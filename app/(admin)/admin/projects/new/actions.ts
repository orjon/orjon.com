"use server"

import { redirect } from "next/navigation"
import { db } from "@/db"
import { projects, projectTechnologies } from "@/db/schema"

const createProject = async (formData: FormData) => {
  const now = Date.now()

  const result = await db
    .insert(projects)
    .values({
      type: "code",
      title: formData.get("title") as string,
      slug: formData.get("slug") as string,
      descriptionTop: formData.get("descriptionTop") as string,
      descriptionBottom: (formData.get("descriptionBottom") as string) || null,
      note: (formData.get("note") as string) || null,
      repo: (formData.get("repo") as string) || null,
      www: (formData.get("www") as string) || null,
      responsive: formData.get("responsive") === "on" ? 1 : 0,
      order: 0,
      archived: 0,
      createdAt: now,
      updatedAt: now,
    })
    .returning({ id: projects.id })

  const projectId = result[0].id
  const techIds = formData.getAll("technologies").map(Number)

  if (techIds.length > 0) {
    await db
      .insert(projectTechnologies)
      .values(techIds.map((technologyId) => ({ projectId, technologyId })))
  }

  redirect("/admin")
}

export { createProject }
