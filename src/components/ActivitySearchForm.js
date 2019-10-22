import React from "react";
import ActivitySearch from './ActivitySearch'

const ActivitySearchForm = ({
  postcodeChange,
  activitySearch,
  postcode,
  selectedDistance,
  distanceSelect,
  categoryValue,
  handleCategorySelect,
  typeOptions,
  typeValue,
  typeSelect,
  disableTypeSelect
}) => {
  return (
    <form onSubmit={activitySearch}>
      <p>Search for activities within a range of patient's postcode</p>
      <div className="postcode-search">
        <label htmlFor="postcodeInput">
          Postcode:
          <input
            type="text"
            id="postcodeInput"
            value={postcode}
            onChange={postcodeChange}
          />
        </label>
          <label className="radio-button-label" htmlFor="twoKilometres">
            2km:
            <input
              type="radio"
              id="twoKilometres"
              value="option2km"
              checked={selectedDistance === 2000}
              onChange={distanceSelect}
            />
          </label>
          <label className="radio-button-label" htmlFor="fiveKilometres">
            5km:
            <input
              type="radio"
              id="fiveKilometres"
              value="option5km"
              checked={selectedDistance === 5000}
              onChange={distanceSelect}
            />
          </label>
          <label className="radio-button-label" htmlFor="all">
            All:
            <input
              type="radio"
              id="all"
              value="all"
              checked={selectedDistance === 0}
              onChange={distanceSelect}
            />
          </label>
      </div>
      <ActivitySearch
        categoryValue={categoryValue}
        handleCategorySelect={handleCategorySelect}
        typeOptions={typeOptions}
        typeValue={typeValue}
        typeSelect={typeSelect}
        disableTypeSelect={disableTypeSelect}
      />
      <input type="submit" value="Search" />
    </form>
  );
};

export default ActivitySearchForm;
