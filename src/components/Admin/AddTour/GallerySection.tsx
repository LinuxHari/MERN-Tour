import ImagePlaceholder from "./ImagePlaceholder"

const GallerySection = () => {
  return (
    <>
    <h4 className="text-18 fw-500 mb-20">Gallery</h4>

<div className="row x-gap-20 y-gap">
  <div className="col-auto">
    <ImagePlaceholder size={1} />
  </div>
</div>

{/* <div className="text-14 mt-20">
  PNG or JPG no bigger than 800px wide and tall.
</div> */}
    </>
  )
}

export default GallerySection