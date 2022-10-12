import { createContext, useReducer } from "react";

const INITIAL_STATE = {
    user: null,
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

    return (
        <UserContext.Provider
            value={{
                state,
                dispatch
            }}>
            {children}
        </UserContext.Provider>
    )
};