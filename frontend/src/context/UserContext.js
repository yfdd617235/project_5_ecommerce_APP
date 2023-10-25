import React, {useState} from 'react'

const UserContext = React.createContext();
const {Provider, Consumer} = UserContext;

const UserProvider = ({children}) =>{
    const [user, setUser] = useState({
        token: null
    })

    const saveToken = (token) => {
        localStorage.setItem('token', token) //save token in local storage
        setUser({token})
    }

    const clearToken = () =>{
        localStorage.clear() //clear token in local storage
        setUser({
            token: null
        })
    }

    return(
        <Provider value={{user, saveToken, clearToken}}>
            {children}
        </Provider>
    )
}

export {UserProvider, Consumer as UserConsumer, UserContext}