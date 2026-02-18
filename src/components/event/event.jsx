import './event.css'

function Event(data) {
  const baseUrl = import.meta.env.BASE_URL;
  return (
    <div>
      <div className='event-image-wrapper'>
        <img className='event-img' src={`${baseUrl}${data.data.image}`} alt={data.data.name} />
      </div>
        <h2 className='event-h2'>{data.data.name}</h2>
        <p>{data.data.date}</p>
    </div>
  )
}

export default Event