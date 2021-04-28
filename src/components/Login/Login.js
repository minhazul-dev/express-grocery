import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useContext } from 'react';
import { UserContext } from '../../App'
import { useHistory, useLocation } from 'react-router';


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    const provider = new firebase.auth.GoogleAuthProvider();

    const handleSignIn = () => {
        firebase.auth().signInWithPopup(provider)
            .then(res => {
                const { displayName, photoURL, email } = res.user;
                const signedInUser = { name: displayName, email }
                setLoggedInUser(signedInUser);
                history.replace(from)
            })

    }

    return (
        <section >
            <h3 className="text-center text-success mt-4">Please log in with google to continue</h3>

            <div className="row">
                <div className="col-md-6 mt-5">
                    <button onClick={handleSignIn} type="button" class="btn btn-primary btn-lg mt-5 p-5">Sign in With google to Continue</button>


                </div>

                <div className="col-md-6 mt-4 p-5" style={{backgroundColor: '#96b0bc'}}>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label htmlFor="inputEmail4" className="form-label text-white">Email</label>
                            <input type="email" className="form-control" id="inputEmail4" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputPassword4" className="form-label text-white">Password</label>
                            <input type="password" className="form-control" id="inputPassword4" />
                        </div>
                        <div className="col-12 mt-3">
                            <label htmlFor="inputAddress" className="form-label text-white">Address</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                        </div>
                        <div className="col-12 mt-3">
                            <label htmlFor="inputAddress2" className="form-label text-white">Address 2</label>
                            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                        </div>
                        <div className="col-md-6 mt-4">
                            <label htmlFor="inputCity" className="form-label text-white">City</label>
                            <input type="text" className="form-control" id="inputCity" />
                        </div>
                        <div className="col-md-4 mt-5">
                            <label htmlFor="inputState" className="form-label text-white mr-2 mt-3">State</label>
                            <select id="inputState" className="form-select">
                                <option selected>Choose...</option>
                                <option>...</option>
                            </select>
                        </div>
                        <div className="col-md-2 mt-3">
                            <label htmlFor="inputZip" className="form-label text-white mt-2">Zip</label>
                            <input type="text" className="form-control" id="inputZip" />
                        </div>
                        <div className="col-12 mt-3">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck" />
                                <label className="form-check-label text-white" htmlFor="gridCheck">
                                    Check me out
            </label>
                            </div>
                        </div>
                        <div className="col-12 mt-4">
                        <button type="button" class="btn btn-warning">Sign in</button>
                        </div>
                    </form>




                </div>

            </div>


        </section>
    );
};

export default Login;