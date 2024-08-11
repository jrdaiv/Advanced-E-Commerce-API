import { createContext } from "react";

const UserContext = createContext({
    user: {
        userName: "",
        email: "",
        password: "",
        isLoggedIn: false,
    }
    , setUser: () => { }
})
export default UserContext;