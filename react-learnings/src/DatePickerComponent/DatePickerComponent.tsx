import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import { Input } from "@/components/ui/input"; // ShadCN Input

export default function DatePickerComponent() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const [selectedTime, setSelectedTime] = useState<any>();

  const [startDate, setStartDate] = useState<Date | null>();
  //   const [startDate, setStartDate] = useState("");

  return (
    <div className="m-6 bg-black">
      <DatePicker
        selected={startDate}
        onChange={(date) => {
          console.log("date", date);
          setStartDate(date);
        }}
        showTimeSelect
        dateFormat="Pp"
        className="px-4 py-2 border border-purple-500 rounded-lg focus:ring-2 focus:ring-purple-400"
        popperPlacement="right-start"
      />
    </div>
  );
}
