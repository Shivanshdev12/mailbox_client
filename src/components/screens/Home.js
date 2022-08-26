import Button from "../UI/Button";
import "./Home.css";

const Home = () => {
    const submitHandler = () => {

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
                        <input type="email" name="email" id="email" />
                        <label htmlFor="Subject">Subject:</label>
                        <input type="text" name="Subject" id="Subject" />
                        <label htmlFor="Message">Message:</label>
                        <textarea type="text" name="Message" id="Message" />
                        <Button className="btn-auth">Send Email</Button>
                    </form>
                </div>
            </div>
        </div>)
}

export default Home;

