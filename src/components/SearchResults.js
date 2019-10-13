import React from "react";
import NameOfService from "./activity-display/NameOfService";
import Address from "./activity-display/Address";
import OtherInfo from "./activity-display/OtherInfo";
import ActivityTimes from "./activity-display/ActivityTimes";
import Cost from "./activity-display/Cost";
import Transport from "./activity-display/Transport";
import Accessibility from "./activity-display/Accessibility";
import ContactDetails from "./activity-display/ContactDetails";

const SearchResults = ({ searchResults, handleSelect, selectedActivities }) => {
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

  // filter the list when the user starts typing into the search by town input
  // filterList = filterList.filter(item => {
  //   return item.Town.toLowerCase().indexOf(townSearch.toLowerCase()) !== -1;
  // });

  const renderedList = filterList.map((item, index) => {
    // check if current activity(item) is not already selected
    if (selectedActivities.indexOf(item) === -1) {
      return (
        <li key={index} onClick={handleSelect.bind(this, item)}>
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
  return <ul className="activity-list-container">{renderedList}</ul>;
};

export default SearchResults;
