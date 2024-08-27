import React, { useContext } from 'react'
import UserContxt from '../context/userContext'

function Profile() {
    const { user } = useContext(UserContxt);

    if (!user) return <div>Please Login</div>
    else
        return (
            <>
                <div>Welcome {user.username}</div>
            </>
        )
}

export default Profile