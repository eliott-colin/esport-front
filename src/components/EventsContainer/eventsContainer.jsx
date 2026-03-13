import Event from "../Event/event.jsx";
import "./eventsContainer.css";
import { Link } from "react-router-dom";

function EventsContainer({ events }) {
  console.log("elitot", events);
  return (
    <div className="events-section">
      <div className="events-wrapper">
        {events?.data.length > 0 ? (
          events.data.map((element, index) => (
            <Link
              to={`/finalfocus/events/${index}`}
              style={{ textDecoration: "none" }}
            >
              <Event key={index} data={element} />
            </Link>
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default EventsContainer;
