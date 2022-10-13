import React, { useContext, useState } from "react";
import axios from 'axios'
import { UserContext } from "../../context/UserContext";

const Login = () => {
    const [userLogin, setUserLogin] = useState({
        username: undefined,
        password: undefined
    });

    const { user, loading, error, dispatch } = useContext(UserContext);
    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");

    // Checks that all fields have input
    // function validateForm() {
    //     return userLogin?.username.length > 0 && userLogin?.password.length > 0;
    // };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await loginUser(userLogin);
            dispatch({
                type: "LOGIN_SUCCESS",
                payload: response.data
            })
        } catch (error) {
            dispatch({
                type: "LOGIN_FAILURE",
                payload: error.response.data
            })
        }
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
        // await loginUser({ username: username, password: password });
    };

    function loginUser(credentials) {
        return axios.post('http://localhost:3001/api/users/login', credentials);

        // .then(data => console.log("logged in user", data));
    };
    const handleChange = (event) => {
        setUserLogin((prev) => ({ ...prev, [event.target.id]: event.target.value }));
        console.log(userLogin)
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
                //  disabled={!validateForm()}
                >
                    Login
                </button>
                <p>Don't have an account? <a href="/signup">Sign-up</a> instead.</p>
            </form>
        </div >

    );

}

export default Login;