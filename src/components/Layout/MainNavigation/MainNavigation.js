import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import "./MainNavigation.css";

const MainNavigation = () => {
    const isToken = localStorage.getItem("token");
    return (
        <Fragment>
            <div className="nav">
                <ul>
                    <li>Home</li>
                    {isToken === null && <li>
                        <NavLink className="list-items" activeClassName="active-item" to="/signup">Signup</NavLink>
                    </li>}
                    {isToken === null && <li>
                        <NavLink className="list-items" activeClassName="active-item" to="/login">Login</NavLink>
                    </li>}
                </ul>
            </div>
        </Fragment>)
}

export default MainNavigation;