import { AiOutlineEdit } from "react-icons/ai";

import "../Styles/TopButtonsPlatform.css";

const TopButtonsPlatform = (props) => {
  const setFilter = props.setFilter;
  const addEntry = props.addEntry;
  const addColumn = props.addColumn;
  const setAddEntry = props.setAddEntry;
  const setAddColumn = props.setAddColumn;
  const tableEditable = props.tableEditable;
  const setTableEditable = props.setTableEditable;

  const modifyFilter = (e) => {
    const newFilter = e.target.value;

    setFilter(newFilter);
  };

  const toggleAddEntry = () => {
    setAddColumn(false);
    setAddEntry(!addEntry);
  };

  const toggleAddColumn = () => {
    setAddEntry(false);
    setAddColumn(!addColumn);
  };

  const onClickEdit = () => {
    console.log("clicked");
    setTableEditable(!tableEditable);
  };

  return (
    <div id="topButtons">
      <div id="editTableButton" onClick={onClickEdit}>
        <AiOutlineEdit className="iconEdit" />
      </div>
      <button className="topPrimaryButton" onClick={toggleAddColumn}>
        Add a column
      </button>
      <button className="topPrimaryButton" onClick={toggleAddEntry}>
        Add an entry
      </button>
      <input
        id="searchStringInput"
        type="text"
        onChange={modifyFilter}
        placeholder="Search"
      ></input>
    </div>
  );
};

export default TopButtonsPlatform;
