import React from "react";

const Cost = ({ cost }) => {
  return (
    <section>
      {cost ? (
        <p>
          <span>Cost:</span> {cost}
        </p>
      ) : null}
    </section>
  );
};

export default Cost;
