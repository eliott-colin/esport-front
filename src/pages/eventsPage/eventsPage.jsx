import React from "react";
import Title from "../../components/Title/title.jsx";
import EventContainer from "../../components/EventsContainer/eventsContainer.jsx";
import Button from "../../components/Button/button.jsx";

function EventsPage() {
  const data = [
    { image: "event1.png", name: "Event 1", date: "17/06/2024" },
    { image: "event2.png", name: "Event 2", date: "18/06/2024" },
    { image: "event3.png", name: "Event 3", date: "19/06/2024" },
    { image: "event1.png", name: "Event 4", date: "20/06/2024" },
    { image: "event2.png", name: "Event 5", date: "21/06/2024" },
    { image: "event3.png", name: "Event 3", date: "19/06/2024" },
    { image: "event1.png", name: "Event 4", date: "20/06/2024" },
    { image: "event2.png", name: "Event 5", date: "21/06/2024" },
    { image: "event3.png", name: "Event 3", date: "19/06/2024" },
    { image: "event1.png", name: "Event 4", date: "20/06/2024" },
    { image: "event2.png", name: "Event 5", date: "21/06/2024" },
  ];
  return (
    <div className="navBarSpace">
      <Title
        title="ÉVÉNEMENTS"
        color="linear-gradient(89deg, #F80DFD -0.19%, #8B1EDF 103.13%)"
        colorFont="#FFFFFF00"
        fontSize="24px"
        arrow={false}
      />
      <EventContainer data={data} />
      <Button
        data={{
          text: "Créer un événement",
          color: "linear-gradient(89deg, #F80DFD -0.19%, #8B1EDF 103.13%)",
          colorFont: "#FFFFFF",
          fontSize: "16px",
        }}
      />
    </div>
  );
}

export default EventsPage;
