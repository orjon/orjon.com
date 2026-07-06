import MockupPhone from "@/app/preview/MockupPhone"

const PreviewPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params


  if (!slug) {
    return <div>No slug provided</div>
  }
  return (
    <div className="w-full h-full bg-grey700 flex flex-col items-center justify-center">
      <MockupPhone slug={slug} />
    </div>

  )
}

export default PreviewPage

