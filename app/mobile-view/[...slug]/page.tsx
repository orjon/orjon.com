const MobileViewPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params


  if (!slug) {
    return <div>No slug provided</div>
  }
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <iframe
        src={`https://www.orjon.com/${slug}`}
        className="w-[30%] h-[95%] border-0"
        allow="fullscreen"
      />
    </div>

  )
}

MobileViewPage.showMenu = false

export default MobileViewPage

