import React, { useContext, useState } from "react";
import axios from "axios"
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [newUser, setNewUser] = useState({
        username: "",
        email: "",
        password: "",
        city: "",
        address: ""
    });

    const { user, loading, error, dispatch } = useContext(UserContext);
    const navPage = useNavigate();
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
        try {
            const response = await createUser(newUser);
            dispatch({
                type: "CREATE_USER",
                payload: response.data
            });
            navPage("/dashboard")
        } catch (error) {
            dispatch({
                type: "LOGIN_FAILURE",
                payload: error.response.data
            });
        };

        // await createUser(newUser);
    };
    console.log(user)

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
                <button type="submit" disabled={!validateForm() || loading}>
                    Sign-up
                </button>
                <p>Already have an account? <a href="/login">Log in</a> instead.</p>
                {error && <p>{error}</p>}
            </form>
        </div >

    );

}

export default Signup;