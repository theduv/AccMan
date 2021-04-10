const FormAddEntry = (props) => {
  const submitNewEntry = props.submitNewEntry;
  const platformColumns = props.platformColumns;

  return (
    <form onSubmit={submitNewEntry}>
      {platformColumns.map((name) => {
        return (
          <input
            className="addInput"
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
