import React, { useState } from "react";
import { Calendar } from "../components/ui/calendar";
import { Button  } from "../components/ui/button";
import { Input  } from "../components/ui/input";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AppContext } from "../App";
export const Commit = () => {

  const [checkin, setCheckin] = useState(new Date());
  const [checkout, setCheckout] = useState(new Date());
  const { setINPUT } = useContext(AppContext);

  const [showCalendarin, setShowCalendarin] = useState(false);
  const handleDateClickin = (type) => {
    setShowCalendarin(!showCalendarin);
  };
  const [showCalendarout, setShowCalendarout] = useState(false);
  const handleDateClickout = (type) => {
    setShowCalendarout(!showCalendarout);
  };

  const { refetch } = useQuery({
    queryKey: ["NAME"],
  })
  return (
    <div className="flex justify-center pt-7 ">
      <div className="mr-8">
        <Button variant="secondary"
          className="text-black mb-4 bg-pink-400 "
          onClick={() => handleDateClickin("checkin")}
        >
          Check-in Date
        </Button>
        {showCalendarin && (
          <Calendar
            mode="single"
            selected={checkin}
            onSelect={setCheckin}
            className="rounded-md border"
          />
        )}

      </div>
      <div>
        <Button variant="secondary"
          className="text-black mb-4 bg-pink-400"
          onClick={() => handleDateClickout("checkout")}
        >
          Check-out Date
        </Button>
        {showCalendarout && (
          <Calendar
            mode="single"
            selected={checkout}
            onSelect={setCheckout}
            className="rounded-md border"
          />
        )}
      </div>
      <div className="flex ml-4">
        <Input className="z-10" placeholder="Search Dectinations"
        onChange={(event) => {
          setINPUT(event.target.value);
        }}></Input>
        
      </div>
      <div>
      <button class="learn-more"
      onClick={refetch}>Search</button>
      </div>
      
    </div>
  );
};
