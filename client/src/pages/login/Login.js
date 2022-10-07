import React, { useState } from "react";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Checks that all fields have input
    function validateForm() {
        return email.length > 0 && password.length > 0;
    };

    function handleSubmit(event) {
        event.preventDefault();
    };

    return (

        <div className="login">
            <form className="login-form" onSubmit={(e) => { handleSubmit(e) }}>
                <label>Email</label>
                <input
                    autoFocus
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" disabled={!validateForm()}>
                    Login
                </button>
            </form>
        </div >

    );

}

export default Login;