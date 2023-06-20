import "./Header.css";
import { useContext } from "react";
import { ThemeContext } from "../context/Context";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import { useLocation } from "react-router-dom";
import { typesContext, searchInputContext } from "../context/Context";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { type, setTypes } = useContext(typesContext);
  const { searchInput, setsearchInput } = useContext(searchInputContext);
  const location = useLocation();

  const handleSearch = (e) => {
    setsearchInput(e.target.value);
  };

  const toggleDarkmode = () => {
    setTheme(!theme);
  };
  const openModal = () => {
    window.location.href = "#openModal";
  };

  return (
    <header className={theme ? "dark-header" : ""}>
      <nav>
        <img src={logo} alt="logo" />
        <div className="headerDiv">
          <div>
            {location.pathname != "/" ? (
              <Link className="backbtn" to="/">
                &lt;
              </Link>
            ) : (
              <Link onClick={openModal} to="/">
                <div className="typesbtn">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </Link>
            )}
          </div>
          <input
            type="text"
            value={searchInput}
            onChange={handleSearch}
            placeholder="Pokemon suchen"
          />
          <a
            className={!theme ? "toggle" : "toggleactive"}
            onClick={toggleDarkmode}
          >
            DARKMODE
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
