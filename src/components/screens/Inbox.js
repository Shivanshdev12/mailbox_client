import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { mailActions } from "../../store/mailSlice";
import { getUsername } from "../../helper";
import Mail from "./Mail";
import "./Inbox.css";

const Inbox = () => {
    let mails = [];
    const [inboxMail, setInboxMail] = useState([]);
    const user = localStorage.getItem("email");
    const username = getUsername(user);
    const dispatch = useDispatch();
    const totalNotOpened = useSelector(state => state.mail.totalNotOpened);
    useEffect(() => {
        fetch(`https://mailbox2210-default-rtdb.firebaseio.com/${username}/receiver.json`).then((res) => {
            return res.json();
        }).then((data) => {
            let notOpened = 0;
            for (let [key, value] of Object.entries(data)) {
                mails.push({ key, ...value });
                if (value.isOpen === false) {
                    notOpened += 1;
                }
            }
            setInboxMail(mails);
            dispatch(mailActions.countNotOpened(notOpened));
        }).catch((err) => {
            console.log(err);
        });
    }, [dispatch]);
    return (
        <div className="home">
            <div className="menu_bar">
                <h3>Mailbox Client</h3>
            </div>
            <div className="container">
                <div className="side_menu">
                    <ul>
                        <li className="active">
                            <NavLink to="/home" activeClassName="active_link">Compose</NavLink>
                        </li>
                        <li><NavLink to="/inbox" activeClassName="active_link">Inbox <span className="not-opened">{totalNotOpened} Unread</span></NavLink></li>
                        <li><NavLink to="/sent" activeClassName="active_link">Sent</NavLink></li>
                    </ul>
                </div>
                <div className="inbox_menu">
                    {inboxMail.map((mail) => {
                        return <Mail key={mail.key} mail={mail} isSentBox={false} />
                    })}
                </div>
            </div>
        </div >);
}

export default Inbox;