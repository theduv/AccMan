import "../Styles/Platform.css";
import { useState, useEffect } from "react";
import Header from "./Header.js";
import PlatformTable from "./PlatformTable";
import FormAddColumn from "./FormAddColumn";
import TopButtonsPlatform from "./TopButtonsPlatform";
import FormAddEntry from "./FormAddEntry";

const Platform = (props) => {
  const platform = props.match.params.platform;
  const [filter, setFilter] = useState("");
  const storageEntries = JSON.parse(
    localStorage.getItem(`${platform};entries`)
  );
  const [platformColumns, setPlatformColumns] = useState(
    JSON.parse(localStorage.getItem(`${platform};columns`)) ?? []
  );
  const [platformEntries, setPlatformEntries] = useState(storageEntries ?? []);
  const [addColumn, setAddColumn] = useState(false);
  const [addEntry, setAddEntry] = useState(false);
  const [tableEditable, setTableEditable] = useState(false);

  useEffect(() => {
    const entries = storageEntries;

    if (!storageEntries || storageEntries === null) {
      setPlatformEntries([]);
      return;
    }
    const newArray = entries.filter((entry) => {
      for (let i = 0; i < entry.length; i++)
        if (entry[i].includes(filter)) return true;
      return false;
    });

    setPlatformEntries(newArray);
  }, [filter, storageEntries]);

  const submitNewColumn = (e) => {
    e.preventDefault();

    const name = e.target.children[0].value;

    if (name === "") return;
    setPlatformColumns([...platformColumns, name]);
    localStorage.setItem(
      `${platform};columns`,
      JSON.stringify([...platformColumns, name])
    );
    e.target.children[0].value = "";
  };

  const submitNewEntry = (e) => {
    e.preventDefault();
    const children = [...e.target.children]
      .slice(0, -1)
      .map((child) => child.value);
    localStorage.setItem(
      `${platform};entries`,
      JSON.stringify([...platformEntries, children])
    );
    setPlatformEntries([...platformEntries, children]);
    const toClear = [...e.target.children];
    toClear.forEach((elem) => {
      elem.value = "";
    });
    e.target.children[0].focus();
  };

  return (
    <div id="mainDivPlatform">
      <div id="headDiv">
        <Header />
        <span id="platformName">{platform}</span>
        <div id="hiddenDiv"></div>
      </div>
      <div id="topTools">
        <TopButtonsPlatform
          filter={filter}
          setFilter={setFilter}
          addColumn={addColumn}
          setAddColumn={setAddColumn}
          setTableEditable={setTableEditable}
          tableEditable={tableEditable}
          addEntry={addEntry}
          setAddEntry={setAddEntry}
        />
        {addEntry && (
          <FormAddEntry
            submitNewEntry={submitNewEntry}
            platformColumns={platformColumns}
          />
        )}
        {addColumn && <FormAddColumn submitNewColumn={submitNewColumn} />}
      </div>
      {platformEntries.length === 0 ? (
        filter === "" ? (
          <div className="emptyTable">
            Click on the "add an entry" button to display the Table.
          </div>
        ) : (
          <div className="emptyTable">String not found in your data.</div>
        )
      ) : (
        <PlatformTable
          setPlatformColumns={setPlatformColumns}
          setPlatformEntries={setPlatformEntries}
          platformEntries={platformEntries}
          platformColumns={platformColumns}
          tableEditable={tableEditable}
          platform={platform}
        />
      )}
    </div>
  );
};

export default Platform;
