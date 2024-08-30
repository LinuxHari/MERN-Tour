import { memo } from "react"
import { RenderProps } from "../../../type"
import ImagePlaceholder from "./ImagePlaceholder"

const GallerySection = ({ render }: RenderProps) => {
  return (
    <>
   {render("Gallery")}

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

const MemoizedGallerySection = memo(GallerySection)

export default MemoizedGallerySection