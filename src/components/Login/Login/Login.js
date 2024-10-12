import React, { useContext } from 'react';
import './Login.css';
import logo from '../../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebase from 'firebase/compat/app';
import firebaseConfig from '../firebase.config';
import { MyContext } from '../../../App';
firebase.initializeApp(firebaseConfig);


const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(MyContext);
    const navigate = useNavigate();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };


    const handleGoogleSignIn = () => {
        const provider = new GoogleAuthProvider();

        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((res) => {
                const { displayName, email, photoURL } = res.user;
                const loggedUserInfo = { name: displayName, email, photo: photoURL };
                setLoggedInUser(loggedUserInfo);
                storeToken(res.user);
                window.localStorage.setItem('isLoggedIn', true);
            }).catch((error) => {
                console.log(error)
            });
    }

    const storeToken = (user) => {
        user.getIdToken(/* forceRefresh */ true)
            .then((idToken) => {
                sessionStorage.setItem('token', idToken);
                navigate(from);
            }).catch((error) => {
                console.log(error);
            });
    }

    return (
        <div className='container'>
            <div className="row">
                <div className="col-4 m-auto login-img"><img src={logo} className='login-img img-fluid ' alt="" /></div>
            </div>
            <div className="row">
                <div className='shadow login-section mt-5 rounded col-4 text-center m-auto auto'>
                    <h2>Login With</h2>
                    <button onClick={handleGoogleSignIn} className='btn my-3 px-5 rounded-start-pill rounded-end-pill btn-outline-secondary '><FontAwesomeIcon icon={faGoogle} className='fs-5 mx-3' /> Continue with Google</button>
                    <p>Don't anve an accoutn? <Link className='text-primary'>Create an accout</Link></p>
                </div>

            </div>
        </div>
    );
};

export default Login;