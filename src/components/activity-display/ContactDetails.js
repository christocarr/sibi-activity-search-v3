import React from "react";

const ContactDetails = ({
  Name1,
  PhoneNumber1,
  Email1,
  Name2,
  PhoneNumber2,
  Email2,
  Website,
  OtherContactInfo
}) => {
  return (
    <section className="contact-container">
      <h4>Contact Details:</h4>
      <p>
        <span>{Name1}</span>: {PhoneNumber1 ? PhoneNumber1 : null}{" "}
        {Email1 ? Email1 : null}
      </p>
      <p>
        {Name2 ? <span>{Name2}:</span> : null}{" "}
        {PhoneNumber2 ? PhoneNumber2 : null} {Email2 ? Email2 : null}
      </p>
      <p>
        {Website ? <span>Website:</span> : null}{" "}
        {Website ? (
          <a href={Website} target="_blank" rel="noopener noreferrer">
            {Website}
          </a>
        ) : null}
      </p>
      <p>
        {OtherContactInfo ? <span>Other:</span> : null}{" "}
        {OtherContactInfo ? (
          <a href={OtherContactInfo} target="_blank" rel="noopener noreferrer">
            {OtherContactInfo}
          </a>
        ) : null}
      </p>
    </section>
  );
};

export default ContactDetails;
