import { Suspense } from "react"
import ProjectGallery from "@/app/components/ProjectGallery"
import { electronicsProjects } from "@/app/data/electronics"

export default function ElectronicsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProjectGallery projects={electronicsProjects} />
    </Suspense>
  )
}