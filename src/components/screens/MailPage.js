import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router";

function getUsername(user) {
    let username = user || " ";
    let t = "";
    for (let i = 0; i < username.length; i++) {
        if (username[i] === '.' || username[i] === '@') {
            continue;
        }
        else {
            t += username[i];
        }
    }
    return t;
}

const MailPage = (props) => {
    const user = localStorage.getItem("email");
    const inboxMails = [];
    const [inbox, setInboxMails] = useState([]);
    const username = getUsername(user);
    useEffect(() => {
        fetch(`https://mailbox2210-default-rtdb.firebaseio.com/${username}/receiver.json`).then((res) => {
            return res.json();
        }).then((data) => {
            for (let [key, value] of Object.entries(data)) {
                inboxMails.push({ key, ...value });
            }
            setInboxMails(inboxMails);
        }).catch((err) => {
            console.log(err);
        })
    }, []);
    const params = useParams();
    const selectedMail = inbox.find((i) => i.key === params.id);
    console.log(selectedMail);
    return (
        <Fragment>
            {console.log(params.id)}
        </Fragment>);
}

export default MailPage;