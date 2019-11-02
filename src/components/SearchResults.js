import React from "react";
import { getDistance } from 'geolib';
import NameOfService from "./activity-display/NameOfService";
import Address from "./activity-display/Address";
import OtherInfo from "./activity-display/OtherInfo";
import ActivityTimes from "./activity-display/ActivityTimes";
import Cost from "./activity-display/Cost";
import Transport from "./activity-display/Transport";
import Accessibility from "./activity-display/Accessibility";
import ContactDetails from "./activity-display/ContactDetails";

const SearchResults = ({ searchResults, handleSelect, selectedActivities, patientLatitude, patientLongitude, selectedDistance }) => {
  let filterList = [];
  // filter search results by date last check is no later than 18 months
  filterList = searchResults.filter(item => {
    const dateNow = Date.now();
    // eighteen months in unix/epoch time in milliseconds
    const eighteenMonths = 47304051840;
    // convert date on sheet to valid format
    let dateString = item.dateLastChecked;
    let dateParts = dateString.split("/");
    let itemDate = new Date(+dateParts[2], dateParts[1] - 1, dateParts[0]);
    //parse sheet date to Unix time
    itemDate = Date.parse(itemDate);
    const dateDiff = dateNow - itemDate;
    return dateDiff <= eighteenMonths;
  });

  // filter list by nearest activities with given postcode
  filterList = filterList.filter(item => {

    let distance = 0
    // if user entered postcode
    if ( patientLatitude > 0) {
      // use geoLib package to find distance between first and second coordinates
      distance = getDistance(
        { latitude: patientLatitude, longitude: patientLongitude },
        { latitude: item.Latitude, longitude: item.Longitude }
      )
    }
    // if distance is equal or less than chosen range then return item
    if (distance <= selectedDistance) {
      console.log(distance)
      return item
    }

    // return all items if the All option is chosen
    if (selectedDistance === 0) {
      console.log(distance)
      return item
    }
    
  });

  const renderedList = filterList.map((item, index) => {
    // check if current activity(item) is not already selected
    if (selectedActivities.indexOf(item) === -1) {
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
          <button onClick={handleSelect.bind(this, item)} className="add-activity-button">Select</button>
        </li>
      );
    } else if (selectedActivities.indexOf(item) !== -1) {
      return (
        <p key={index}>
          <span>{item.NameOfService}</span> has been selected and is ready for
          review.
        </p>
      );
    }
  });

  return (
    <div>
      <ul className="activity-list-container">{renderedList}</ul>
    </div>
  )

};

export default SearchResults;
