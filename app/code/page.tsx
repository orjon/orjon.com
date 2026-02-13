import { Suspense } from "react"
import CodeClient from "@/app/code/CodeClient"

export default function CodePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CodeClient />
    </Suspense>
  )
}