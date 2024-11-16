import React, {useContext} from "react";
import UserContext from "../context/UserContext";

function Profile() {
    const {user} = useContext(UserContext);

    if(!user) return <div>Please Login!!!</div>

    return (
        <>
            <div> Welcome {JSON.stringify(user)}</div>
            <div> Welcome {user.username} {user.password}</div>
        </>
    )
}

export default Profile;