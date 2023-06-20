import "./Header.css"
import { useContext } from "react";
import { ThemeContext } from "../context/Context";
import {Link} from "react-router-dom"
import logo from "../assets/img/logo.png"
import { useLocation } from 'react-router-dom';
import burgerMenu from "../assets/img/burgermenu.png";
import { typesContext } from "../context/Context";


const Header = () => {
    const {theme,setTheme} = useContext(ThemeContext)
    const {type, setTypes} = useContext(typesContext)
    const location = useLocation();


    const toggleDarkmode = () => {
        setTheme(!theme)
    }
   const openModal = () => {
    window.location.href="#openModal";
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
                        <Link  onClick={openModal} to="/">
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