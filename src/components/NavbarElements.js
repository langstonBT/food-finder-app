// Filename - ./components/Navbar.js
 

import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
 

 
export const NavLink = styled(Link)`
    color: black;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 0.5rem;
    height: 100%;
    cursor: pointer;
    font-weight:600;
    font-size:18px;
    &.active {
        color: #4d4dff;
        border-bottom: 2px solid #007bff;
    }
    @media screen and (max-width: 768px) {
        display: none;
    }
`;
 

 
