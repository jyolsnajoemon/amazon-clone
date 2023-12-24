import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment  from "./Payment";
import Orders from "./Orders";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51ONtLjSD0qXNpe7rP3KtppaKAkCH7t1nYZtH2KLkyMxg1hp2c7orX9e2SF6mqAzHXRZho5zws1fVREv3CwVyjopU00bDe2vbOg"
);

function App() {
    // eslint-disable-next-line no-empty-pattern
  const[{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log('THE USER IS >>>', authUser);

      if(authUser){
        // the user just logged in/ the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
       // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
