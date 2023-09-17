
import BookingTable from './BookingTable'
import BookingForm from './BookingForm'
import './bookings.css'


function Bookings() {

  return (
    <>
      <div className='wrap'>
        <BookingForm/>        
        <BookingTable/>
      </div>
    </>
  )
}

export default Bookings;