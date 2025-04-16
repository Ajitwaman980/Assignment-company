import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Calendar default styles

const MyCalendar = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="w-full max-w-sm mx-auto mt-5 p-3 bg-white border border-gray-200 rounded-md">
      <h2 className="text-lg font-bold text-center text-gray-700 mb-3">
        Task Calendar
      </h2>
      <Calendar onChange={setDate} value={date} />
      <p className="text-center text-sm text-gray-600 mt-3">
        Selected Date:{" "}
        <span className="font-medium text-gray-800">{date.toDateString()}</span>
      </p>
    </div>
  );
};

export default MyCalendar;
