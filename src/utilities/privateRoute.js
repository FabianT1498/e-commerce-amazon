/* @flow */
import React, {useContext} from 'react'

import { AuthContext } from '_context/auth/authContext'

import { Redirect, Route } from "react-router-dom";

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
const PrivateRoute = ({ children, ...rest }) => {
    const { user } = useContext(AuthContext)

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user 
                    ? (children) 
                    : (
                        <Redirect
                            to={{
                            pathname: "/login",
                            state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
}

export default PrivateRoute