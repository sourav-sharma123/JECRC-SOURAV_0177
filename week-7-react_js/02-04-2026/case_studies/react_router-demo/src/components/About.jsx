import React from "react";

function About()
{
    return (
        <div style={styles.container}>
            <h1>About page</h1>
            <p>This application demonstrate react router</p>
            <p>It includes navigation, routing, and component rendering.</p>
        </div>
    );
}

const styles ={
    container: {
        textAlign: "center",
        padding: "40px",
        backgoround: "#fff3cd"
    }
};

export default About;