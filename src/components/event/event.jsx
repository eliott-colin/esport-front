import eventImage from '/event.jpg'
import './event.css'

function Event() {
  return (
    <div>
      <img src={eventImage} alt="Event Component" />
        <h2>Welcome to the Event Component !</h2>
        <p>17/06/2024</p>
    </div>
  )
}

export default Event