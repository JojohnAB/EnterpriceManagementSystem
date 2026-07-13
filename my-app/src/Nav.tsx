import { NavLink } from "react-router-dom";
import "./Nav.css";

function Nav() {

    return (

        <nav className="navigation">

            <NavLink
                to="/frontend"
                className={({isActive})=>isActive ? "active" : ""}
            >
                💻 Frontend
            </NavLink>

            <NavLink
                to="/cloud"
                className={({isActive})=>isActive ? "active" : ""}
            >
                ☁️ Cloud
            </NavLink>

            <NavLink
                to="/project"
                className={({isActive})=>isActive ? "active" : ""}
            >
                📊 Projects
            </NavLink>

        </nav>

    );
}

export default Nav;