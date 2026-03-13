import React, { useEffect, useState } from "react";
import Title from "../../components/Title/title.jsx";
import EventContainer from "../../components/EventsContainer/eventsContainer.jsx";
import Button from "../../components/Button/button.jsx";
import { getEvents } from "../../api/events.js";

function EventsPage() {
  const [events, setEvents] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getEvents()
      .then((res) => {
        console.log("res", res);
        setEvents(res);
      })
      .catch((err) => {
        console.error("Erreur lors du chargement du profil :", err);
      })
      .finally(() => setLoading(false));
  }, []);
  return (
    <div className="navBarSpace">
      <Title
        title="ÉVÉNEMENTS"
        color="linear-gradient(89deg, #F80DFD -0.19%, #8B1EDF 103.13%)"
        colorFont="#FFFFFF00"
        fontSize="24px"
        arrow={false}
      />
      <EventContainer events={events} />
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
