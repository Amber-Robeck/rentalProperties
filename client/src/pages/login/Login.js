import React, { useContext, useState } from "react";
import axios from "axios"
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [userLogin, setUserLogin] = useState({
        username: "",
        password: ""
    });

    const { user, loading, error, dispatch } = useContext(UserContext);
    const navPage = useNavigate();

    // Checks that all fields have input
    const validateForm = () => {
        return userLogin.username?.length > 0 && userLogin.password?.length > 0;
    };
    // if login success write user to local storage nav to dashboard
    //TODO**Check if user is admin before routing to dashboard else route to non-admin home
    // otherwise display error to user
    //adminadmin4 adminadmin
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await loginUser(userLogin);
            dispatch({
                type: "LOGIN_SUCCESS",
                payload: response.data
            });
            navPage("/dashboard")
        } catch (error) {
            dispatch({
                type: "LOGIN_FAILURE",
                payload: error.response.data
            });
        };
    };

    const loginUser = (credentials) => {
        return axios.post('http://localhost:3001/api/users/login', credentials);
    };

    const handleChange = (event) => {
        setUserLogin((prev) => ({ ...prev, [event.target.id]: event.target.value }));
        // console.log(userLogin)
    }
    console.log(user)
    return (

        <div className="login">
            <form className="login-form" onSubmit={(e) => { handleSubmit(e) }}>
                <label>Username</label>
                <input
                    id="username"
                    autoFocus
                    type="text"
                    value={userLogin.username}
                    onChange={(e) => handleChange(e)}
                />
                <label>Password</label>
                <input
                    id="password"
                    type="password"
                    value={userLogin.password}
                    onChange={(e) => handleChange(e)}
                />
                <button type="submit"
                    disabled={!validateForm() || loading}
                >
                    Login
                </button>
                <p>Don't have an account? <a href="/signup">Sign-up</a> instead.</p>
                {error && <p>{error}</p>}
            </form>
        </div >

    );

}

export default Login;