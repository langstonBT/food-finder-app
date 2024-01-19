import React from "react"
import foodFindersLogo from "../Images/icon.jpg";

import {NavLink} from 'react-router-dom';
const Navbar = () => {
    const [scrolled, setScrolled] = React.useState(false);
    const [isHovered, setIsHovered] = React.useState(false);
    React.useEffect(() => {
        // Function to handle scroll events
        const handleScroll = () => {
        const isScrolled = window.scrollY >  0;
        setScrolled(isScrolled);
        };

    // Add event listener for scroll
        window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navbarStyle = {
        backgroundColor: scrolled || isHovered ?"white":'rgba(0, 0, 0, 0)',
        padding: "0.2rem 5% 0 5%",
        boxShadow: scrolled || isHovered ?'rgba(33, 35, 38, 0.2) 0px 10px 50px -10px':"none",
        transition: 'height 0.8s, box-shadow 0.5s ease-in-out',
        position: 'fixed',
        width: '100%',
        top: 0,
        zIndex: 1000,
        height: scrolled ? "60px":"90px",
        display: "flex",
        justifyContent: "left",
        alignItems:"center",
  


      };
    return (
        <>
            <nav style={navbarStyle} 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <NavLink to="/" className="logo"><img alt="logo image" className="logo" src={foodFindersLogo} /></NavLink>
            
            <div className="nav-menu">
            
            <NavLink to="/about"
            style={({ isActive }) => {
            return isActive ? {"color": "#4d4dff",
                "border-bottom": "2px solid #007bff"} : {};
             }}
            activeStyle
            className="nav-link-buttons">
                    About
            </NavLink>
            <NavLink style={({ isActive }) => {
            return isActive ? {"color": "#4d4dff",
                "border-bottom": "2px solid #007bff"} : {};
             }}
            activeStyle
            className="nav-link-buttons" to="/contact">
                    Contact Us
            </NavLink>
            <NavLink style={({ isActive }) => {
            return isActive ? {"color": "#4d4dff",
                "border-bottom": "2px solid #007bff"} : {};
             }}
            activeStyle
            className="nav-link-buttons" to="/blogs">
                    Blogs
            </NavLink>
            <NavLink style={({ isActive }) => {
            return isActive ? {"color": "rgb(27, 106, 252)",
            "background-color":"white",
            
                "border": "2px solid rgb(27, 106, 252)"} : {};
             }}
            activeStyle
            className="nav-link-buttons-sign-up" to="/sign-up">
                    Sign Up
            </NavLink>
            </div>   
            </nav>
        </>
    );
};
 
export default Navbar;