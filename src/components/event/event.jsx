import "./event.css";

function Event(data) {
  const baseUrl = import.meta.env.BASE_URL;
  return (
    <div>
      <div className="event-image-wrapper">
        <img
          className="event-img"
          src={`${baseUrl}${data.data.image}`}
          alt={data.data.name}
        />
      </div>
      <p className="event-h2 p-event">{data.data.name}</p>
      <p className="smallText p-event">{data.data.date}</p>
    </div>
  );
}

export default Event;
