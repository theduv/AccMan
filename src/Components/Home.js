import Header from "./Header";
import { AiOutlineDelete } from "react-icons/ai";
import "../Styles/Home.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { IconContext } from "react-icons/lib";

const Home = () => {
  const localStoragePlatforms = JSON.parse(localStorage.getItem("platforms"));
  const [addingPlatform, setAddingPlatform] = useState(false);
  const [platforms, setPlatforms] = useState(localStoragePlatforms ?? []);

  const onHitEnter = (name) => {
    if (name === "" || name.startsWith("?")) return;
    setPlatforms([...platforms, name]);
    localStorage.setItem("platforms", JSON.stringify([...platforms, name]));
    toggleAddPlatform();
  };

  const deletePlatform = (name) => {
    const res = window.confirm(
      `Do you really want to delete the platform ${name} ?`
    );
    if (res) {
      localStorage.setItem(
        "platforms",
        JSON.stringify(platforms.filter((platform) => platform !== name))
      );
      localStorage.removeItem(`${name};columns`);
      localStorage.removeItem(`${name};entries`);
      setPlatforms(platforms.filter((platform) => platform !== name));
    }
  };

  const onInputHandler = (e) => {
    if (e.key === "Enter") onHitEnter(e.target.value);
  };

  const toggleAddPlatform = () => {
    setAddingPlatform(!addingPlatform);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    const name = e.target.children[0].value;

    onHitEnter(name);
  };

  return (
    <div id="homeMainDiv">
      <Header />
      <div id="motto">Never lose an account ever again</div>
      <div>
        <button className="primaryButton" onClick={toggleAddPlatform}>
          Add a platform{" "}
        </button>
      </div>
      {addingPlatform && (
        <form onSubmit={onSubmitForm}>
          <input
            className="addInput"
            type="text"
            onKeyDown={onInputHandler}
            placeholder="Platform name"
          ></input>
          <button className="cancelButton button" onClick={toggleAddPlatform}>
            ✖
          </button>
          <input
            type="submit"
            id="validateSubmit"
            className="validateButton button"
            value="✔"
          ></input>
        </form>
      )}
      {platforms.map((platform) => {
        return (
          <div className="platformLink" key={platform}>
            <Link to={`/platform/${encodeURI(platform)}`}>
              {" "}
              <button className="buttonLink">{platform}</button>
            </Link>
            <IconContext.Provider value={{ color: "white", size: "3em" }}>
              <AiOutlineDelete
                className="buttonDelete"
                stroke="white"
                strokeWidth={1}
                onClick={() => {
                  deletePlatform(platform);
                }}
                name={platform}
              />
            </IconContext.Provider>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
