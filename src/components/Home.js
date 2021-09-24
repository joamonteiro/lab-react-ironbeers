import React from "react";
import img1_home from "../assets/beers.png"
import img2_home from "../assets/random-beer.png"
import img3_home from "../assets/new-beer.png"
import { NavLink } from "react-router-dom";

function Home() {
    return(
        <div className="home-container">
            <div className="all-beers">
                <NavLink to={'/'} style={{ textDecoration: 'none' }}><img src={img1_home} alt="all beers"/><h1>All Beers</h1></NavLink>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus, urna ut hendrerit aliquam, elit diam scelerisque neque, non condimentum turpis lectus vel nisi. Praesent tempus dui nunc, sit amet ornare orci posuere vitae.</p>
            </div>


            <div className="random-beer">
                <NavLink to={'/random'} style={{ textDecoration: 'none' }}><img src={img2_home} alt="random beer"/><h1>Random Beer</h1></NavLink>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus, urna ut hendrerit aliquam, elit diam scelerisque neque, non condimentum turpis lectus vel nisi. Praesent tempus dui nunc, sit amet ornare orci posuere vitae.</p>
            </div>

            <div className="create-beer">
                <NavLink to={'/new'} style={{ textDecoration: 'none' }}><img src={img3_home} alt="create beer"/><h1>Create Beer</h1></NavLink>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus, urna ut hendrerit aliquam, elit diam scelerisque neque, non condimentum turpis lectus vel nisi. Praesent tempus dui nunc, sit amet ornare orci posuere vitae.</p>
            </div>
        </div>
    )
}

export default Home;