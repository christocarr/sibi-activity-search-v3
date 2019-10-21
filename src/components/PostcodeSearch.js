import React from "react";

const PostcodeSearch = ({
  postcodeChange,
  postcodeSearch,
  postcode,
  latitude,
  longitude,
  selectedDistance,
  distanceSelect
}) => {
  return (
    <form onSubmit={postcodeSearch}>
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
        <div>
          <label htmlFor="twoKilometres">
            2km:
            <input
              type="radio"
              id="twoKilometres"
              value="option2km"
              checked={selectedDistance === 2000}
              onChange={distanceSelect}
            />
          </label>
          <label htmlFor="fiveKilometres">
            5km:
            <input
              type="radio"
              id="fiveKilometres"
              value="option5km"
              checked={selectedDistance === 5000}
              onChange={distanceSelect}
            />
          </label>
          <label htmlFor="all">
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
        <input type="submit" value="Search" />
      </div>
    </form>
  );
};

export default PostcodeSearch;
