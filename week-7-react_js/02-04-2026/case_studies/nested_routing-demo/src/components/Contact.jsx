import React from "react";

function Contact()
{
    return (
        <div style={styles.container}>
            <h1>Contact page</h1>
            <p>You can reach us at:</p>
            <p>Email: support@example.com</p>
            <p>Phone: +91 1234567890</p>
        </div>
    );
}

const styles ={
    container: {
        textAlign: "center",
        padding: "40px",
        backgoround: "#d4edda"
    }
};

export default Contact;