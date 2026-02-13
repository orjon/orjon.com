import { Suspense } from "react"
import ElectronicsClient from "@/app/electronics/ElectronicsClient"

export default function CodePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ElectronicsClient />
    </Suspense>
  )
}
