import React, { useState } from "react";
import axios from 'axios'

const Signup = () => {
    const [newUser, setNewUser] = useState({ username: "", email: "", password: "" });
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // //  username: req.body.username,
    // email: req.body.email,
    // password: hash,
    // city: req.body.city,
    // address: req.body.address,
    // isAdmin: req.body.isAdmin

    // Checks that all fields have input
    function validateForm() {
        return newUser.username.length > 0 && newUser.password.length > 0 && newUser.email.length > 0;
    };

    async function handleSubmit(event) {
        event.preventDefault();
        // console.log(JSON.stringify({ username: username, password: password }));
        // const customConfig = {
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // };
        // const user =
        // {
        //     username: "adminadmin4",
        //     email: "admin4@test.com",
        //     password: "adminadmin",
        //     city: "Thisone",
        //     address: "333 Test Lane",
        //     isAdmin: true
        // }
        await loginUser(newUser);
    };

    function loginUser(credentials) {
        return axios.post('http://localhost:3001/api/users', credentials)
            .then(data => console.log("logged in user", data));
    };

    function onChangeUser(value) {
        let user = { ...newUser, value };
        return setNewUser(user);
    }
    return (

        <div className="login">
            <form className="login-form" onSubmit={(e) => { handleSubmit(e) }}>
                <label>Username</label>
                <input
                    autoFocus
                    type="text"
                    value={username}
                    onChange={(e) => onChangeUser(e.target.value)}
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
                <p>Already have an account? <a href="/login">Log in</a> instead.</p>
            </form>
        </div >

    );

}

export default Signup;