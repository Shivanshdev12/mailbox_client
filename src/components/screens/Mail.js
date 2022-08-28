import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineDelete, AiOutlineStar } from "react-icons/ai";
import "./Mail.css";

const Mail = (props) => {
    return (
        <Fragment>
            <div className="inbox_mail">
                <span><AiOutlineDelete /></span>
                <span><AiOutlineStar /></span>
                <NavLink state={props.mail} to={`/inbox/${props.mail.key}`}>
                    <p>{props.mail.subject}</p>
                </NavLink>
            </div>
        </Fragment>)
}

export default Mail;