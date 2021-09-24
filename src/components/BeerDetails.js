import React, { useState, useEffect } from "react";
import homeIcon from "../assets/home_i.png"
import { NavLink } from "react-router-dom";
import axios from "axios";

function BeerDetails({match}) {
    const[beer, setBeer] = useState({})

    useEffect(() => {
        async function getBeer() {
            const beerId = match.params._id;
            const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
            setBeer(response.data)
        }
        getBeer();
    })

    return(
        <>
            <nav>
                <NavLink to="/home"><img src={homeIcon} alt="home button" height= "30rem"/></NavLink>
            </nav>
            <div className="beer-row">
                {beer.name ? ( 
                <div className="beer-details">
                    <img src={beer.image_url} alt={beer.name} height="250rem"/>
                    <span className="beer-h1">
                        <h3>{beer.name}</h3>
                        <h4>{beer.attenuation_level}</h4>
                    </span>
                    <span className="beer-h2">
                        <h5>{beer.tagline}</h5>
                        <h6>{beer.first_brewed}</h6>
                    </span>
                    <p>{beer.description}</p>
                    <strong>{beer.contributed_by}</strong>
                </div>
                ):(<h3>Loading ...</h3>)}
            </div>
        </>
    )
}

export default BeerDetails;