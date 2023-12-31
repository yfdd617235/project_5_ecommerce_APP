import React, {useState} from 'react'

const UserContext = React.createContext();
const {Provider, Consumer} = UserContext;

const UserProvider = ({children}) =>{
    const [user, setUser] = useState({
        token: null,
        role: null,
        userProfile: null
    })

    const saveToken = (token, role) => {
        localStorage.setItem('token', token) //save token in local storage
        localStorage.setItem('role', role) //save role in local storage
        setUser({token, role})
    }

    const saveUserProfile = (userProfile) => {
        localStorage.setItem('userProfile', userProfile)
        setUser({userProfile})
    }

    const clearToken = () =>{
        localStorage.clear() //clear token in local storage
        setUser({
            token: null
        })
    }

    return(
        <Provider value={{user, saveToken, clearToken, saveUserProfile}}>
            {children}
        </Provider>
    )
}

export {UserProvider, Consumer as UserConsumer, UserContext}