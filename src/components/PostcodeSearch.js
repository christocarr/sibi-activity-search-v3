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
    <form onSubmit={postcodeSearch} className="postcode-search">
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
      </div>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default PostcodeSearch;
