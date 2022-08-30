import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineDelete, AiOutlineStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { mailActions } from "../../store/mailSlice";
import "./Mail.css";

const Mail = (props) => {
    const dispatch = useDispatch();
    const openHandler = (key) => {
        fetch(`https://mailbox2210-default-rtdb.firebaseio.com/${props.mail.receiver}/receiver/${key}.json`, {
            method: "PUT",
            body: JSON.stringify({
                receiver: props.mail.receiver,
                subject: props.mail.subject,
                message: props.mail.message,
                sender: props.mail.sender,
                isOpen: true
            })
        }).then((res) => {
            dispatch(mailActions.openMail(props.mail.key));
        })
    }
    const deleteHandler = () => {
        fetch(`https://mailbox2210-default-rtdb.firebaseio.com/${props.mail.receiver}/receiver/${props.mail.key}.json`, {
            method: "DELETE"
        }).then((res) => {
            if (res.ok) return res.json();
        }).then((data) => {
            window.location.reload();
            dispatch(mailActions.deleteMail(props.mail.key));
        }).catch((err) => {
            console.error(err);
        })
    }
    return (
        <Fragment>
            <div className="inbox_mail">
                <span onClick={deleteHandler} className="delete_handler"><AiOutlineDelete /></span>
                <span><AiOutlineStar /></span>
                {!props.mail.isOpen && <span className="dot"></span>}
                <NavLink state={props.mail} to={`/inbox/${props.mail.key}`} onClick={openHandler.bind(null, props.mail.key)}>
                    <p>{props.mail.subject}</p>
                </NavLink>
            </div>
        </Fragment>
    );
}

export default Mail;