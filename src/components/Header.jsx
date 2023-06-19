import "./Header.css"
import { useContext } from "react";
import { ThemeContext } from "../context/Context";
import {Link} from "react-router-dom"
import logo from "../assets/img/logo.png"


const Header = () => {
    const {theme,setTheme} = useContext(ThemeContext)

    const toggleDarkmode = () => {
        setTheme(!theme)
    }

    return (  
        <header className={theme?"dark-header":""}>
            <nav>
                <img src={logo} alt="logo" />
                <div>
                    <Link className="backbtn" to="/">&lt;</Link>
                    <input type="text" />
                    <a className={!theme?"toggle":"toggleactive"} onClick={toggleDarkmode}>DARKMODE</a>
                </div>
            </nav>
        </header>
    );
}
 
export default Header;