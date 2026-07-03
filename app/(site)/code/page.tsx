import { Suspense } from "react"
import ProjectGallery from "@/app/components/ProjectGallery"
import { codeProjects } from "@/app/data/code"

export default function CodePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProjectGallery projects={codeProjects} />
    </Suspense>
  )
}