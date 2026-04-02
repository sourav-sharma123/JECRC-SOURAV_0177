import React from "react";
import { NavLink } from "react-router-dom";

function Navbar()
{
    return (
        <nav style={styles.nav}>
            <h2 style = {styles.logo}> MyApp </h2>
            <div>
                <NavLink to="/" styles={styles.link} end> Home</NavLink>
                <NavLink to="/about" styles={styles.link} end> About</NavLink>
                <NavLink to="/contact" styles={styles.link} end> Contact</NavLink>
            </div>
            
        </nav>
    );
}

const styles ={
    nav: {
        display: "flex",
        justifyContent: "space-between",
        padding: "15px 40px",
        background: "#37f707",
        color: "white",
        alignItems: "center"
    },
    logo :{
        margin: 0
    },
    link : ({ isActive }) => ({
        margin : "0 10px",
        textDecoration: "none",
        color: isActive ? "#38bdf8" : "white",
        fontWeight : isActive ? "bold" : "normal"
    })
};

export default Navbar;