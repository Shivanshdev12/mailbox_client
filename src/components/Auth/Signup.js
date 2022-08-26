import { Fragment, useRef } from "react";
import { useHistory } from "react-router-dom";
import Button from "../UI/Button";
import "./Signup.css";


const Signup = () => {
    const email = useRef();
    const password = useRef();
    const confirmPassword = useRef();
    const history = useHistory();
    const submitHandler = (e) => {
        e.preventDefault();
        const enteredEmail = email.current.value;
        const enteredPassword = password.current.value;
        const confirmEntered = confirmPassword.current.value;
        if (enteredPassword === confirmEntered) {
            fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD4YJ5mDV8e4nq7QsSEqHvWjnhg2RZQGsE`, {
                method: "POST",
                body: JSON.stringify({
                    email: enteredEmail,
                    password: enteredPassword,
                    returnSecureToken: true,
                })
            }).then((res) => {
                if (!res.ok) {
                    console.log(res);
                }
                return res.json();
            }).then((data) => {
                localStorage.setItem("token", data.idToken);
                localStorage.setItem("email", enteredEmail);
                history.push("/home");
                window.location.reload();
                console.log("USER LOGGED IN!");
            })
        }
        else {
            window.alert("ENTER SAME PASSWORD!");
        }
    }
    return <Fragment>
        <div className="signup">
            <h3>New User ? Sign up</h3>
            <form onSubmit={submitHandler} className="signup_form">
                <label htmlFor="Email">Email:</label>
                <input id="Email" name="Email" type="email" ref={email} required />
                <label htmlFor="password">Password:</label>
                <input id="password" name="password" type="password" ref={password} required />
                <label htmlFor="confirm">Confirm Password:</label>
                <input id="confirm" name="confirm" type="password" ref={confirmPassword} required />
                <Button className="btn-auth">SignUp</Button>
            </form>
            <p><span>Already have an account ? Login</span></p>
        </div>
    </Fragment>
}

export default Signup;