import { NavLink } from "react-router-dom";
import { useRef } from "react";
import Button from "../UI/Button";
import "./Home.css";

const Home = () => {
    let username = localStorage.getItem("email") || " ";
    let t = "";
    for (let i = 0; i < username.length; i++) {
        if (username[i] === '.' || username[i] === '@') {
            continue;
        }
        else {
            t += username[i];
        }
    }
    username = t;
    const to = useRef();
    const subject = useRef();
    const message = useRef();
    const submitHandler = (e) => {
        e.preventDefault();
        const enteredto = to.current.value;
        const enteredSubject = subject.current.value;
        const enteredmessage = message.current.value;
        const email = {
            enteredto,
            enteredSubject,
            enteredmessage
        }
        fetch(`https://mailbox2210-default-rtdb.firebaseio.com/emails/${username}.json`, {
            method: "POST",
            body: JSON.stringify(email)
        }).then((res) => {
            if (!res.ok) {
                throw new Error("Something went wrong!");
            }
            else return res.json();
        }).then((data) => {
            console.log(data, "MESSAGE SENT");
        }).catch((err) => {
            console.log(err);
        })
    }
    return (
        <div className="home">
            <div className="menu_bar">
                <h3>Mailbox Client</h3>
            </div>
            <div className="container">
                <div className="side_menu">
                    <ul>
                        <li>Inbox</li>
                        <li>Sent</li>
                    </ul>
                </div>
                <div className="main_menu">
                    <form className="mailbox" onSubmit={submitHandler}>
                        <label htmlFor="email">To:</label>
                        <input type="email" name="email" id="email" ref={to} />
                        <label htmlFor="Subject">Subject:</label>
                        <input type="text" name="Subject" id="Subject" ref={subject} />
                        <label htmlFor="Message">Message:</label>
                        <textarea type="text" name="Message" id="Message" ref={message} />
                        <Button className="btn-auth">Send Email</Button>
                    </form>
                </div>
            </div>
        </div>)
}

export default Home;

