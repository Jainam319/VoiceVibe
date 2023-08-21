import React from "react";
import { Navigate } from "react-router-dom";

function GuestRoute({ isAuth, children,...rest }) {
    console.log(isAuth)
    if (isAuth) {
        return <Navigate to={{
            pathname: '/rooms',
            state: { from: rest.location }
        }} />
    }
    return children;
}
export default GuestRoute;