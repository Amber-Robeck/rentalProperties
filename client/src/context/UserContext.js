import { createContext, useReducer } from "react";

const INITIAL_STATE = {

};

export const UserContext = createContext(INITIAL_STATE);

const UserReducer = (state, action) => {
    switch (action.type) {
        case "NEW_USER":
            return action.payload;
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