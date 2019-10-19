import React from "react";
import NameOfService from "./activity-display/NameOfService";
import Address from "./activity-display/Address";
import OtherInfo from "./activity-display/OtherInfo";
import ActivityTimes from "./activity-display/ActivityTimes";
import Cost from "./activity-display/Cost";
import Transport from "./activity-display/Transport";
import Accessibility from "./activity-display/Accessibility";
import ContactDetails from "./activity-display/ContactDetails";

const Checkout = ({ selectedActivities, handleActivityRemove }) => {
  const renderedList = selectedActivities.map((item, index) => {
    return (
      <li key={index}>
        <NameOfService serviceName={item.NameOfService} />
        <Address
          AddressLine1={item.AddressLine1}
          AddressLine2={item.AddressLine2}
          AddressLine3={item.AddressLine3}
          Postcode={item.Postcode}
        />
        <OtherInfo otherInfo={item.OtherDetailedInformation} />
        <ActivityTimes times={item} />
        <Cost cost={item.Cost} />
        <Transport
          buses={item.Buses}
          tubeAndTrains={item.TubeAndTrains}
          carPark={item.CarParkingDetails}
        />
        {item.AccessibilityDetails && (
          <Accessibility accessibility={item.AccessibilityDetails} />
        )}
        <ContactDetails
          Name1={item.Name1}
          PhoneNumber1={item.PhoneNumber1}
          Email1={item.Email1}
          Name2={item.Name2}
          PhoneNumber2={item.PhoneNumber2}
          Website={item.Website}
          OtherContactInfo={item.OtherContactInfo}
        />
        <button onClick={handleActivityRemove.bind(this, item)} className="remove-activity-button">Remove</button>
      </li>
    );
  });

  return (
    <div>
      {selectedActivities.length === 0 && (
        <p>
          There are no activities to review. Please search and select activities
        </p>
      )}
      {selectedActivities.length === 1 && (
        <p>You have selected {selectedActivities.length} activity.</p>
      )}
      {selectedActivities.length > 1 && (
        <p>You have selected {selectedActivities.length} activities.</p>
      )}
      {selectedActivities.length > 0 ? <button>Print</button> : null}
      <ul className="activity-list-container">{renderedList}</ul>
    </div>
  );
};

export default Checkout;
