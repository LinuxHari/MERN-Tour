import Label from "../Shared/Label/Label"
import Rating from "../Shared/Rating/Rating"
import TourGallery from "./TourGallery"

type Props = {
    freeCancellation: boolean
    isBestSeller: boolean
    title: string
    rating: number
    reviewCount: number
    location: string
    totalBookings: number
    images: string[]
}

const TourHeader = ({freeCancellation, isBestSeller, title, rating, reviewCount, location, totalBookings, images}: Props) => {
  return (
    <section className="">
      <div className="container">
        <div className="row y-gap-20 justify-between items-end">
          <div className="col-auto">
            <div className="row x-gap-10 y-gap-10 items-center">
             {freeCancellation && <Label type={1}>Best seller</Label>}
             {isBestSeller && <Label>Free cancellation</Label>}
            </div>

            <h2 className="text-40 sm:text-30 lh-14 mt-20">
              {title}
            </h2>

            <div className="row x-gap-20 y-gap-20 items-center pt-20">
              <div className="col-auto">
                <Rating rating={rating} reviewCount={reviewCount}/>
              </div>

              <div className="col-auto">
                <div className="d-flex items-center">
                  <i className="icon-pin text-16 mr-5"></i>
                  {location}
                </div>
              </div>

              <div className="col-auto">
                <div className="d-flex items-center">
                  <i className="icon-reservation text-16 mr-5"></i>
                  {totalBookings} booked
                </div>
              </div>
            </div>
          </div>

          <div className="col-auto">
            <div className="d-flex x-gap-30 y-gap-10">
              <a href="#" className="d-flex items-center">
                <i className="icon-share flex-center text-16 mr-10"></i>
                Share
              </a>

              <a href="#" className="d-flex items-center">
                <i className="icon-heart flex-center text-16 mr-10"></i>
                Wishlist
              </a>
            </div>
          </div>
        </div>
        <TourGallery images={images}/>
      </div>
    </section>
  )
}

export default TourHeader