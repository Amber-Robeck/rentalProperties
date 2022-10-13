import React, { useState } from "react";
import axios from 'axios'

const Signup = () => {
    const [newUser, setNewUser] = useState({
        username: "",
        email: "",
        password: "",
        city: "",
        address: ""
    });
    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");

    // //  username: req.body.username,
    // email: req.body.email,
    // password: hash,
    // city: req.body.city,
    // address: req.body.address,
    // isAdmin: req.body.isAdmin

    // Checks that all fields have input
    function validateForm() {
        return (
            newUser.username?.length > 0 &&
            newUser.password?.length > 0 &&
            newUser.email?.length > 0 &&
            newUser.city?.length &&
            newUser.address?.length
        )
    };

    async function handleSubmit(event) {
        event.preventDefault();

        await createUser(newUser);
        console.log(newUser)
    };

    function createUser(credentials) {
        return axios.post('http://localhost:3001/api/users', credentials);
    };

    const handleChange = (event) => {
        setNewUser((prev) => ({ ...prev, [event.target.id]: event.target.value }));
        // console.log(userLogin)
    };
    // function onChangeUser(value) {
    //     let user = { ...newUser, value };
    //     return setNewUser(user);
    // }
    return (

        <div className="signup">
            <form className="signup-form" onSubmit={(e) => { handleSubmit(e) }}>
                <label>Username</label>
                <input
                    autoFocus
                    id="username"
                    type="text"
                    value={newUser.username}
                    onChange={(e) => handleChange(e)}
                />
                <label>Email</label>
                <input
                    id="email"
                    type="text"
                    value={newUser.email}
                    onChange={(e) => handleChange(e)}
                />
                <label>Password</label>
                <input
                    id="password"
                    type="password"
                    value={newUser.password}
                    onChange={(e) => handleChange(e)}
                />
                <label>City</label>
                <input
                    id="city"
                    type="text"
                    value={newUser.city}
                    onChange={(e) => handleChange(e)}
                />
                <label>Address</label>
                <input
                    id="address"
                    type="text"
                    value={newUser.address}
                    onChange={(e) => handleChange(e)}
                />
                <button type="submit" disabled={!validateForm()}>
                    Sign-up
                </button>
                <p>Already have an account? <a href="/login">Log in</a> instead.</p>
            </form>
        </div >

    );

}

export default Signup;