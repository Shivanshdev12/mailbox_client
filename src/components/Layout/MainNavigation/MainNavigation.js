import { Fragment } from "react";
import { NavLink, useHistory } from "react-router-dom";
import Button from "../../UI/Button";
import "./MainNavigation.css";

const MainNavigation = () => {
    const isToken = localStorage.getItem("token");
    const history = useHistory();
    const logoutHandler = () => {
        localStorage.removeItem("token");
        window.location.reload();
        history.replace("/login");
    }
    return (
        <Fragment>
            <div className="nav">
                <ul>
                    {isToken !== null &&
                        <li><NavLink className="list-items" activeClassName="active-item" to="/home">Home</NavLink></li>}
                    {isToken === null && <li>
                        <NavLink className="list-items" activeClassName="active-item" to="/signup">Signup</NavLink>
                    </li>}
                    {isToken === null && <li>
                        <NavLink className="list-items" activeClassName="active-item" to="/login">Login</NavLink>
                    </li>}
                    {isToken !== null && <li>
                        <Button onClick={logoutHandler} className="list-items btn-auth" to="/logout">Logout</Button>
                    </li>}
                </ul>
            </div>
        </Fragment>)
}

export default MainNavigation;