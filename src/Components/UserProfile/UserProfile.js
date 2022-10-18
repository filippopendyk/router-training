import React from "react";
import { useParams } from 'react-router-dom';

const UserProfile = () => {
    let { username } = useParams();
    
    return (
        <div>
            <h2>This is your username: {username}</h2>
        </div>
    )
}

export default UserProfile;