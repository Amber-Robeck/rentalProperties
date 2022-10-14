import React, { useContext } from 'react'
import { UserContext } from "../../context/UserContext";

import { useNavigate } from "react-router-dom";
const Navbar = () => {
    const { user, dispatch } = useContext(UserContext);
    const navPage = useNavigate();

    const handleLogout = async (e) => {
        e.preventDefault()
        try {
            dispatch({
                type: "LOGOUT"
            });
            localStorage.removeItem("user")
            navPage("/")
        } catch (error) {
            dispatch({
                type: "LOGIN_FAILURE",
                payload: error.response.data
            });
        };
    };
    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <div className='searchbar'>
                    <input type="text" placeholder="Search" />
                </div>
                <div className='links'>
                    <div className='link'>ONE</div>
                    <div className='link'>TWO</div>
                    <div className='link'>THREE</div>
                    <div className='link'>FOUR</div>
                    <div className='link'>FIVE</div>
                    < div className='link' >
                        {!user?.username
                            ? <a href='/login'>login</a>
                            : <a href='/' onClick={(e) => handleLogout(e)}>logout</a>
                        }
                    </div>
                </div>
            </div>
        </nav >
    )
}

export default Navbar
