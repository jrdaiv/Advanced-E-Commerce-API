import { createContext, useEffect, useState } from "react";

const UserContext = createContext({
    user: {
        userName: "",
        email: "",
        password: "",
        isLoggedIn: false,
        token: ""
    },
     setUser: () => { }
})


export const UserProvider = () => {
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : { userName: '', email: '', password: '', isLoggedIn: false, token: ''};
    })

    useEffect(() => {
        if(user.isLoggedIn){
            localStorage.setItem('user', JSON.stringify(user));
        }else{
            localStorage.removeItem('user');
        }
    }, [user])

    
}






export default UserContext;