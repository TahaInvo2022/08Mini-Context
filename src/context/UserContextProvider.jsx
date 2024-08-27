import React, {useState} from 'react'
import UserContxt from './userContext'

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    return (
        <UserContxt.Provider value={{user, setUser}}>
            {children}
        </UserContxt.Provider>
    )
}

export default UserContextProvider;