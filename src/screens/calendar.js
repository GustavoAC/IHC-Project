import React from "react";
import Calendar from "react-big-calendar";
import moment from "moment";

import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = Calendar.momentLocalizer(moment);

const events = [
  {
    start: new Date(),
    end: new Date(moment().add(0, "days")),
    title: "Atendimento Geriátrico"
  }
];

const AttCalendar = () => {
  return (
    <Calendar
      onSelectEvent={() => {
        window.location.href = "/atendimentos/awad";
      }}
      localizer={localizer}
      defaultDate={new Date()}
      defaultView="month"
      events={events}
      style={{ height: "100vh" }}
    />
  );
};

export default AttCalendar;
