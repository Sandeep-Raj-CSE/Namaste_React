
// Header Layout Component

import { useEffect, useState } from "react";
import {LOGO_URL} from "../utils/constant"
import { Link } from "react-router-dom";

import Contact from "./Contact";
import About from "./About";

const Header = () => {

    let [btnname , setbtnname] = useState("Login")

    useEffect(()=>{

       

    },[])




    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src= {LOGO_URL} />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/About">About Us</Link>
                    </li>
                    <li>
                       <Link to="/Contact"> Contact Us</Link>
                    </li>
                    <li>Cart</li>
                    <button className="login" 
                    onClick={()=>{
                        if(btnname === "Login"){
                            setbtnname("Logout")
                        }else{

                            setbtnname("Login")
                        }
                       
                        // Logout logic here
                    }}>{btnname}</button>
                </ul>
            </div>
        </div>
    );
};

// phele export 

export default Header;