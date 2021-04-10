import "../Styles/FormAddEntry.css";

const FormAddEntry = (props) => {
  const submitNewEntry = props.submitNewEntry;
  const platformColumns = props.platformColumns;

  return (
    <form onSubmit={submitNewEntry} id="formAddEntry">
      {platformColumns.map((name, index) => {
        return (
          <input
            className="addInputEntry"
            placeholder={name}
            key={index}
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
