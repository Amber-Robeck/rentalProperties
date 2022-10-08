import React, { useState } from "react";
import axios from 'axios'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Checks that all fields have input
    function validateForm() {
        return email.length > 0 && password.length > 0;
    };

    async function handleSubmit(event) {
        event.preventDefault();
        console.log(JSON.stringify({ username: email, password: password }));
        // const customConfig = {
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // };
        const user =
        {
            username: "adminadmin4",
            email: "admin4@test.com",
            password: "adminadmin",
            city: "Thisone",
            address: "333 Test Lane",
            isAdmin: true
        }
        // await loginUser({ username: email, password: password })
        await axios.post('http://localhost:3001/api/users', user)
            // .then(data => data.json())
            .then(data => console.log(data))
    };

    function loginUser(credentials) {
        return axios.post('http://localhost:3001/users/login', JSON.stringify(credentials))
            .then(data => data.json())
            .then(data => console.log(data))
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