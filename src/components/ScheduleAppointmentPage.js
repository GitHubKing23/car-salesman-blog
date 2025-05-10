// src/components/ScheduleAppointmentPage.js
import React from 'react';
import { Helmet } from 'react-helmet';
import { InlineWidget } from "react-calendly";

const ScheduleAppointmentPage = () => {
  return (
    <div className="schedule-page">
      <Helmet>
        <title>Schedule an Appointment - Jeff'sCarBlog</title>
        <meta name="description" content="Schedule an appointment with Jeff to discuss your car needs and get expert advice." />
      </Helmet>
      <h1>Schedule an Appointment</h1>
      <InlineWidget url="https://calendly.com/wise11jeff/car-sales-meeting" />
    </div>
  );
};

export default ScheduleAppointmentPage;
