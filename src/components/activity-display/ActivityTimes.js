import React from "react";

const ActivityTimes = ({ times }) => {
  const {
    MondayStart,
    MondayEnd,
    TuesdayStart,
    TuesdayEnd,
    WednesdayStart,
    WednesdayEnd,
    ThursdayStart,
    ThursdayEnd,
    FridayStart,
    FridayEnd,
    SaturdayStart,
    SaturdayEnd,
    SundayStart,
    SundayEnd
  } = times;

  return (
    <section className="times">
      {MondayStart && (
        <p>
          <span>Monday:</span> {MondayStart} - {MondayEnd}
        </p>
      )}
      {TuesdayStart && (
        <p>
          <span>Tuesday:</span> {TuesdayStart} - {TuesdayEnd}
        </p>
      )}
      {WednesdayStart && (
        <p>
          <span>Wednesday:</span> {WednesdayStart} - {WednesdayEnd}
        </p>
      )}
      {ThursdayStart && (
        <p>
          <span>Thursday:</span> {ThursdayStart} - {ThursdayEnd}
        </p>
      )}
      {FridayStart && (
        <p>
          <span>Friday:</span> {FridayStart} - {FridayEnd}
        </p>
      )}
      {SaturdayStart && (
        <p>
          <span>Saturday:</span> {SaturdayStart} - {SaturdayEnd}
        </p>
      )}
      {SundayStart && (
        <p>
          <span>Sunday:</span> {SundayStart} - {SundayEnd}
        </p>
      )}
    </section>
  );
};

export default ActivityTimes;
