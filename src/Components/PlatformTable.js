import { AiOutlineDelete } from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import "../Styles/PlatformTable.css";

const PlatformTable = (props) => {
  const platform = props.platform;
  const platformEntries = props.platformEntries;
  const platformColumns = props.platformColumns;
  const setPlatformEntries = props.setPlatformEntries;
  const tableEditable = props.tableEditable;
  const setPlatformColumns = props.setPlatformColumns;

  const onInputField = (entryIndex, fieldIndex, e) => {
    const newArray = platformEntries;
    newArray[entryIndex][fieldIndex] = e.target.textContent;
    setPlatformEntries(newArray);
    localStorage.setItem(`${platform};entries`, JSON.stringify(newArray));
  };

  const onClickRemoveColumn = (index) => {
    const res = window.confirm(
      "Are you sure that you want to remove this column ?"
    );

    if (!res) return;

    console.log(index);
    console.log(platformColumns);
    let newArrayColumns = platformColumns;
    newArrayColumns.splice(index, 1);
    const newArrayEntries = platformEntries.map((entry) => {
      let tmp = entry;
      tmp.splice(index, 1);
      return tmp;
    });

    setPlatformColumns(newArrayColumns);
    localStorage.setItem(
      `${platform};columns`,
      JSON.stringify(newArrayColumns)
    );
    setPlatformEntries(newArrayEntries);
    localStorage.setItem(
      `${platform};entries`,
      JSON.stringify(newArrayEntries)
    );
  };

  const onClickRemove = (index) => {
    const confirm = window.confirm(
      `Are you sure that you want to remove this line ?`
    );

    if (!confirm) return;
    const newArray = platformEntries;

    newArray.splice(index, 1);
    console.log(newArray);
    setPlatformEntries(newArray);
    localStorage.setItem(`${platform};entries`, JSON.stringify(newArray));
  };

  const onInputColumn = (index, e) => {
    const newArray = platformColumns;

    newArray[index] = e.target.textContent;
    setPlatformColumns(newArray);
    localStorage.setItem(`${platform};columns`, JSON.stringify(newArray));
  };
  return (
    <table id="platformTable">
      <thead>
        <tr>
          {tableEditable && (
            <th className="tableColumnField" style={{ width: "25px" }}>
              Delete
            </th>
          )}
          <th className="tableColumnField" style={{ width: "2vmin" }}>
            #
          </th>
          {platformColumns.map((name, index) => {
            return (
              <th
                contentEditable={tableEditable}
                onInput={(e) => onInputColumn(index, e)}
                key={index}
                className="tableColumnField"
              >
                {name}
                {tableEditable && (
                  <IconContext.Provider value={{ color: "white" }}>
                    <AiOutlineDelete
                      className="buttonDelete"
                      onClick={() => onClickRemoveColumn(index)}
                    />
                  </IconContext.Provider>
                )}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody id="tableBody">
        {platformEntries.map((entry, mainIndex) => {
          return (
            <tr className="tableRow" key={mainIndex}>
              {tableEditable && (
                <td className="tableField">
                  <IconContext.Provider value={{ color: "white" }}>
                    <AiOutlineDelete onClick={() => onClickRemove(mainIndex)} />
                  </IconContext.Provider>
                </td>
              )}
              <td className="tableField" style={{ color: "white" }}>
                {mainIndex + 1}
              </td>
              {entry.map((current, index) => (
                <td
                  className="tableField"
                  key={index}
                  contentEditable={tableEditable}
                  onInput={(e) => onInputField(mainIndex, index, e)}
                >
                  {current}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default PlatformTable;
