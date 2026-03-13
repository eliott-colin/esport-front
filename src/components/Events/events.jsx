import Event from "../Event/event";
import Title from "../Title/title";
import "./events.css";

function Events({ events }) {
  return (
    <>
      <Title
        title="EVENEMENTS"
        color="linear-gradient(89deg, #F80DFD -0.19%, #8B1EDF 103.13%)"
        colorFont="#FFFFFF00"
        fontSize="2.5vh"
        arrow={true}
      />
      <div className="events-div">
        {events?.data.length > 0 ? (
          events.data.map((element, index) => (
            <Event key={index} data={element} />
          ))
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default Events;
