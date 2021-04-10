import "../Styles/FormAddEntry.css";

const FormAddEntry = (props) => {
  const submitNewEntry = props.submitNewEntry;
  const platformColumns = props.platformColumns;

  return (
    <form onSubmit={submitNewEntry} id="formAddEntry">
      {platformColumns.map((name) => {
        return (
          <input
            id="addInputEntry"
            placeholder={name}
            key={"input" + name}
          ></input>
        );
      })}
      <button className="button validateButton" type="submit">
        ✔
      </button>
    </form>
  );
};

export default FormAddEntry;
