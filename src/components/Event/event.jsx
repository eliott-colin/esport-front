import "./event.css";

function Event(data) {
  const baseUrl = import.meta.env.BASE_URL;
  return (
    <div className="event-container">
      <div className="event-image-wrapper">
        <img
          className="event-img"
          src={`${baseUrl}${data.data.image}`}
          alt={data.data.name}
        />
      </div>
      <div className="event-info">
        <p className="event-h2 p-event">{data.data.name}</p>
        <p className="smallText p-event">{data.data.date}</p>
      </div>
    </div>
  );
}

export default Event;
