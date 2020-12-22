import React from 'react'
import fire from "../Fire/Fire";

const Layout = () => {
    const handleLogout =() => {
        fire.auth().signOut();
    }
    return(
        <>
            <h1>Widok po zalogowaniu</h1>
            <button onClick={handleLogout}>Logout</button>
        </>
    )
};

export default Layout;