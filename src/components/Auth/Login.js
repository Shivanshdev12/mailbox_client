import { useRef } from "react";
import { useHistory } from "react-router-dom";
import Button from "../UI/Button";
import "./Login.css";

const Login = () => {
    const email = useRef();
    const password = useRef();
    const history = useHistory();
    const submitHandler = (e) => {
        e.preventDefault();
        const enteredEmail = email.current.value;
        const enteredPassword = password.current.value;
        fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD4YJ5mDV8e4nq7QsSEqHvWjnhg2RZQGsE`, {
            method: "POST",
            body: JSON.stringify({
                email: enteredEmail,
                password: enteredPassword,
                returnSecureToken: true,
            })
        }).then((res) => {
            if (!res.ok) {
                throw new Error("Something went wrong!");
            }
            return res.json();
        }).then((data) => {
            localStorage.setItem("token", data.idToken);
            localStorage.setItem("email", enteredEmail);
            console.log("USER LOGGED IN!");
            history.push("/home");
            window.location.reload();
        }).catch((err) => {
            window.alert(err.message);
        })
    }
    return (
        <div className="login">
            <h3>Login here</h3>
            <form onSubmit={submitHandler} className="login_form">
                <label htmlFor="Email">Email:</label>
                <input id="Email" name="Email" type="email" ref={email} required />
                <label htmlFor="password">Password:</label>
                <input id="password" name="password" type="password" ref={password} required />
                <Button className="btn-auth">Login</Button>
            </form>
            <p><span>Create a new Account : Sign-up</span></p>
        </div>)
}

export default Login;