import React from "react";
import Select from "react-select";

const categoryOptions = [
  { value: "Advice category", label: "Advice" },
  { value: "Activity (art & craft)", label: "Art and craft" },
  { value: "Activity (board & card games)", label: "Board and card games" },
  { value: "Learning topic", label: "Learning" },
  { value: "Activity (music & drama)", label: "Music and drama" },
  { value: "Activity (social)", label: "Social" },
  {
    value: "Activity (sport & active games)",
    label: "Sports and active games"
  },
  { value: "Activity (wellbeing)", label: "Wellbeing" }
];

const ActivitySearch = ({
  categoryValue,
  handleCategorySelect,
  typeOptions,
  typeValue,
  handleTypeSelect,
  disableTypeSelect
}) => {
  //add class to disable type select
  let showTypeSelect = "";
  if (disableTypeSelect) {
    showTypeSelect = "type-disabled";
  }
  return (
    <div className="search-container">
      <Select options={categoryOptions} onChange={handleCategorySelect} />
      <Select
        className={showTypeSelect}
        options={typeOptions}
        value={typeValue}
        // isMulti
        onChange={handleTypeSelect}
      />
    </div>
  );
};

export default ActivitySearch;
