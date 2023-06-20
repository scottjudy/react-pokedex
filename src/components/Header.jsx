import "./Header.css"
import { useContext } from "react";
import { ThemeContext } from "../context/Context";
import {Link} from "react-router-dom"
import logo from "../assets/img/logo.png"
import { useLocation } from 'react-router-dom';
import burgerMenu from "../assets/img/burgermenu.png"


const Header = () => {
    const {theme,setTheme} = useContext(ThemeContext)
    const location = useLocation();


    const toggleDarkmode = () => {
        setTheme(!theme)
    }


    return (  
        <header className={theme?"dark-header":""}>
            <nav>
                <img src={logo} alt="logo" />
                <div className="headerDiv">
                    <div>
                        {location.pathname != "/"?
                        <Link className="backbtn" to="/">&lt;</Link> 
                        : 
                        <Link  to="/">
                            <div className="typesbtn">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            </Link>}
                    </div>
                    <input type="text" />
                    <a className={!theme?"toggle":"toggleactive"} onClick={toggleDarkmode}>DARKMODE</a>
                </div>
            </nav>
        </header>
    );
}
 
export default Header;