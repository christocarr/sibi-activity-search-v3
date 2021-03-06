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
  disableTypeSelect,
  clearForm
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
            placeholder="e.g. HA9 0LH"
            autoFocus
          />
        </label>
          <label className="radio-button-label" htmlFor="twoKilometres">
            <input
              type="radio"
              id="twoKilometres"
              value="option2km"
              checked={selectedDistance === 2000}
              onChange={distanceSelect}
            />
            2km
          </label>
          <label className="radio-button-label" htmlFor="fiveKilometres">
            <input
              type="radio"
              id="fiveKilometres"
              value="option5km"
              checked={selectedDistance === 5000}
              onChange={distanceSelect}
            />
            5km
          </label>
          <label className="radio-button-label" htmlFor="all">
            <input
              type="radio"
              id="all"
              value="all"
              checked={selectedDistance === 0}
              onChange={distanceSelect}
            />
            All
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
      <div className="form-button-container">
        <input type="button" value="Clear" onClick={clearForm} />
        <input type="submit" value="Search" />
      </div>
    </form>
  );
};

export default ActivitySearchForm;
