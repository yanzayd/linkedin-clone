import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Payment from './Payment';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Fragment, useEffect } from 'react';
import Login from './Login';
import { auth } from './firebase';
import  "firebase/compat/auth";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from './Orders';

const promise = loadStripe('pk_test_51LOMrnHMd8NMukGQgPQiInPA4mhlv9slvHBW0ocDL7wk00MVXVkXqGxUaj5w3R4u0lMUTjCtAT79rJye0ixEDE9Y00zcS0yd8s');


function App() {
  // eslint-disable-next-line no-empty-pattern
  const [{}, dispatch] = useStateValue();

  useEffect(()=>{
    //this will only run once when the app component loads...
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);

      if(authUser){
        // the user just logged in / the user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else{
        //the user is logged out

        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    //BEM convention
    <Router>
      <div className="app">
        <Routes>


        <Route exact path="/orders" element= {
            <Fragment>
              <Header />
              <Orders />
            </Fragment>
            }/>

          <Route exact path="/login" element= {
            <Fragment>
              <Login />
            </Fragment>
            }/>
          
          <Route exact path="/checkout" element={
            <Fragment>
              <Header />
              <Checkout />
            </Fragment>
          }/> 
          
          <Route exact path="/payment" element={
            <Fragment>
              <Header />
              <Elements stripe={promise}>
              <Payment/>
              </Elements>
            </Fragment>
          }/>  

          <Route exact path="/" element= {
            <Fragment>
              <Header />
              <Home/>
            </Fragment>
            }/>
            

        </Routes>
  
      </div>
    </Router>
  );
}

export default App;
