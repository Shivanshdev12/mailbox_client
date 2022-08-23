import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import "./MainNavigation.css";

const MainNavigation = () => {
    return (
        <Fragment>
            <div className="nav">
                <ul>
                    <li>Home</li>
                    <li>
                        <NavLink className="list-items" activeClassName="active-item" to="/signup">Signup</NavLink>
                    </li>
                    <li>Login</li>
                </ul>
            </div>
        </Fragment>)
}

export default MainNavigation;