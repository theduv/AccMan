const FormAddColumn = (props) => {
  const submitNewColumn = props.submitNewColumn;

  return (
    <form onSubmit={submitNewColumn}>
      <input className="addInput" type="text" placeholder="Column name"></input>
      <button className="button validateButton" type="submit">
        ✔
      </button>
    </form>
  );
};

export default FormAddColumn;
