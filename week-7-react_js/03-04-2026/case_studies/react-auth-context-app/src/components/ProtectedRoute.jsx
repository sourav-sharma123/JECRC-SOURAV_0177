import React, { Children } from "react";
import { useAuth } from "../context/Authcontext";

function ProtectedRouter () {
    const { isAuthenticated, loading} = useAuth();
    if(loading) {
        return <p>Loading....</p>
    }
    if(!isAuthenticated){
        return <p>You must be logged in to view this page</p>
    }
    return children;
}
export default ProtectedRouter;