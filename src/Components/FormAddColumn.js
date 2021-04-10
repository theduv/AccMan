import "../Styles/FormAddColumn.css";

const FormAddColumn = (props) => {
  const submitNewColumn = props.submitNewColumn;

  return (
    <form onSubmit={submitNewColumn} id="formAddColumn">
      <input id="addInputColumn" type="text" placeholder="Column name"></input>
      <button className="button validateButton" type="submit">
        ✔
      </button>
    </form>
  );
};

export default FormAddColumn;
