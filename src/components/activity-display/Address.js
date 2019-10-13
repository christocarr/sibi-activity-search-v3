import React from "react";

const Address = ({ AddressLine1, AddressLine2, AddressLine3, Postcode }) => {
  return (
    <section className="address-container">
      <p>{AddressLine1}</p>
      <p>{AddressLine2}</p>
      {AddressLine3 ? <p>{AddressLine3}</p> : null}
      <p>{Postcode}</p>
    </section>
  );
};

export default Address;
