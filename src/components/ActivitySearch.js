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
  handleCategorySelect,
  typeOptions,
  typeValue,
  typeSelect,
  disableTypeSelect
}) => {
  //add class to disable type select
  let showTypeSelect = "";
  if (disableTypeSelect) {
    showTypeSelect = "type-disabled";
  }
  return (
    <div className="select-container">
      <Select
        options={categoryOptions}
        onChange={handleCategorySelect}
        placeholder="Choose a category"
      />
      <Select
        className={showTypeSelect}
        options={typeOptions}
        value={typeValue}
        onChange={typeSelect}
        placeholder="then select an activity type"
      />
    </div>
  );
};

export default ActivitySearch;
