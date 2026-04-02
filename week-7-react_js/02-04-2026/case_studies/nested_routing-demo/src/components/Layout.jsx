import Navbar from "./Navbar";

import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <>
            <Navbar />
            <div style= {styles.container}>
                <Outlet/>
            </div>
        </>
    );
}

const styles ={
    container: {
        textAlign: "center",
        padding: "40px"
    }
};

export default Layout;