import { useParams } from 'react-router-dom'
import { useGetReservedTourQuery } from '../../redux/api/baseApi'
import Button from '../Shared/Button/Button'

type Params = {
  reserveId: string
}

const BookingDetailsCard = () => {
  const { reserveId } = useParams() as Params
  const {data, isLoading, isError} = useGetReservedTourQuery(reserveId)
  return (

    <div className="pl-50 md:pl-0">
      <div className="bg-white rounded-12 shadow-2 py-30 px-30 md:py-20 md:px-20">
        <h2 className="text-20 fw-500">Your booking details</h2>

        <div className="d-flex mt-30">
          <img src="img/tourSingle/booking/1.png" alt="image"/>
          <div className="ml-20">Zipline 18 Platform and ATV Adventure Tour From Phuket</div>
        </div>

        <div className="line mt-20 mb-20"></div>

        <div className="">

          <div className="d-flex items-center justify-between">
            <div className="fw-500">Date:</div>
            <div className="">06 April 2023</div>
          </div>

          <div className="d-flex items-center justify-between">
            <div className="fw-500">Duration:</div>
            <div className="">12 Days</div>
          </div>

          <div className="d-flex items-center justify-between">
            <div className="fw-500">Tickets:</div>
            <div className="">Adult x2 = $98</div>
          </div>

          <div className="d-flex items-center justify-between">
            <div className="fw-500"></div>
            <div className="">Youth x3 = $383</div>
          </div>

          <div className="d-flex items-center justify-between">
            <div className="fw-500"></div>
            <div className="">Children x6 = $394</div>
          </div>

        </div>

        <div className="line mt-20 mb-20"></div>

        <div className="">

          <div className="d-flex items-center justify-between">
            <div className="fw-500">Subtotal</div>
            <div className="">$382</div>
          </div>

          <div className="d-flex items-center justify-between">
            <div className="fw-500">Total</div>
            <div className="">$23</div>
          </div>

          {/* <div className="d-flex items-center justify-between">
            <div className="fw-500">Amount Paid</div>
            <div className="">$3.482</div>
          </div>

          <div className="d-flex items-center justify-between">
            <div className="fw-500">Amount Due</div>
            <div className="">$43.242</div>
          </div> */}

        </div>
      </div>

      <div className="mt-30">
        <Button buttonType='primary' type='submit' className='w-100'>
          Complete My Order
        </Button>
      </div>
    </div>
  )
}

export default BookingDetailsCard