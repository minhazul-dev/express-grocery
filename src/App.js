// import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import AddProducts from './components/AddProducts/AddProducts';
import Login from './components/Login/Login';
import CheckOut from './components/CheckOut/CheckOut';
import { createContext } from 'react';
import { useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Orders from './components/Orders/Orders';
import Manage from './components/Manage/Manage';



export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <div className="container">

      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        {/* <p>Name: {loggedInUser.name}</p> */}

        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/manage">
              <Manage></Manage>
            </Route>
            <PrivateRoute path="/addProducts">
              <AddProducts />
            </PrivateRoute>
            <PrivateRoute path="/checkout/:_id">
              <CheckOut />
            </PrivateRoute>
            <PrivateRoute>
              <Orders />
            </PrivateRoute>
          </Switch>
        </Router>
      </UserContext.Provider>

    </div>
  );
}

export default App;
