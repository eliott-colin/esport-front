import Event from "../Event/event.jsx";
import "./eventsContainer.css";
import { Link } from "react-router-dom";

function EventsContainer({ data }) {
  return (
    <div className="events-section">
      <div className="events-wrapper">
        {data.map((element, index) => (
          <Link
            to={`/finalfocus/events/${index}`}
            style={{ textDecoration: "none" }}
          >
            <Event key={index} data={element} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default EventsContainer;
