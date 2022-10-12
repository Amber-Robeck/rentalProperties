import { createContext, useEffect, useReducer } from "react";

//INITIAL_STATE grab user from localstorage if one exists otherwise null
const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    error: null
};

export const UserContext = createContext(INITIAL_STATE);

const UserReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return {
                user: action.payload,
                error: null
            };
        case "LOGIN_FAILURE":
            return {
                user: null,
                error: action.payload
            };
        case "LOGOUT":
            return {
                user: null,
                error: null
            };
        default:
            return state;
    };
};
export const UserContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(UserReducer, INITIAL_STATE)

    //save user to local storage for auth
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user))
    }, [state.user])
    return (
        <UserContext.Provider
            value={{
                user: state.user,
                error: state.error,
                dispatch
            }}>
            {children}
        </UserContext.Provider>
    )
};