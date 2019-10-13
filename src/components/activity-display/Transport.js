import React from "react";

const Transport = ({ buses, tubeAndTrains, carPark }) => {
  return (
    <section className="transport-container">
      <h4>Transport:</h4>
      <p>
        <span>Buses:</span> {buses}
      </p>
      <p>
        <span>Tube and Trains:</span> {tubeAndTrains}
      </p>
      {carPark && (
        <p>
          <span>Car Park Availability:</span> {carPark}
        </p>
      )}
    </section>
  );
};

export default Transport;
