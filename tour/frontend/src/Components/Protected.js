import React from "react";
import { Route, Redirect ,Navigate} from "react-router-dom";
import Login from "./Login";
import Navbarcomp from "./Navbarcomp";

const Protected = ({authentication}) => {

    const auth = authentication;
    console.log(auth);

     // determine if authorized, from context or however you're doing it

    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
   
    return localStorage.getItem('check') ? < Navbarcomp/> : <Navigate to="/" />;
}
export default Protected;