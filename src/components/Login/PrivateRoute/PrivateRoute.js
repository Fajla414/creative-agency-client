import React, { useContext } from 'react';
import { MyContext } from '../../../App';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const [loggedInUser, setLoggedInUser] = useContext(MyContext);
    return loggedInUser.email ? children : <Navigate to={'/login'} state={{ from: location }} />;
};

export default PrivateRoute;