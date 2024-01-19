// Filename - pages/index.js
import React from "react";
import tableMeal from "../Images/steaks-oil-salt-knife-and-a-cutting-board.jpg"
import pizza from "../Images/delicious-plate-of-pepperoni-pizza.jpg"
import pinkDessert from "../Images/pastel-macaron-pyramid-on-pink-portrait.jpg"
import cookies from "../Images/a-stack-of-cookies-and-a-glass-of-milk.jpg"
import salad from "../Images/fresh-plated-salad.jpg"

import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className="index-page">
            <div className="top-section">
                <div className="landing-description">
                    <h1 className="find-recipes" >Find recipes using your own ingredients fast!</h1>
                    <p>Simply enter you ingredients and choose your filters, to get cooking.</p>
                    <Link class="ingredients-page-link" to="/ingredients">Add ingredients</Link>
                </div>
                <img alt="pizza" src={pizza} />   
            </div>


            <div className="title-page-photo-with-text">
                <img  alt="table" class="table-photo" src={tableMeal}/>
                  
            </div>

            
            <div className="third-page-space">
                    <img alt="third" className="third-image-index-page" src={pinkDessert} />
                    <div><h1 className="third-image-description">We use AI based algorithms to recommend you recpies you will love, to make delicious meals</h1></div>
            </div>
            
            <div className="fourth-page-source">
                <div className="individual-card"> 
                    <img alt="fourth section" className="fourth-section-image" src={cookies} 
                    id="section1"/>
                    <h1 className= "fourth-section-title"
                    id="section1">Step 1</h1> 
                    <p className= "fourth-section-paragraph"
                    id="section1">Add the ingredients in your fridge to the food finders website.</p>
                </div>
                <div className="individual-card"> 
                    <img  alt="fourth section" className="fourth-section-image" src={salad} 
                    id="section2"/>
                    <h1 className= "fourth-section-title"
                    id="section2">Step 2</h1> 
                    <p className= "fourth-section-paragraph"
                    id="section2">Choose your filters and preferences</p>
                </div>
                <div className="individual-card"> 
                    <img  alt="Fifth section" className="fourth-section-image" src={cookies} 
                    id="section3"/>
                    <h1 className= "fourth-section-title"
                    id="section3">Step 3</h1> 
                    <p className= "fourth-section-paragraph"
                    id="section3">Start finding cheap recipes!</p>
                </div>    
            </div>   
        </div>
    );
};
 
export default Home;

/*<h1 className ="big-slogan-1">Cheap, Delious Recipes...</h1>
                <h1 className ="big-slogan-2">For everyone!</h1>    */