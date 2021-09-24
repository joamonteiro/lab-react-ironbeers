import React, { useState, useEffect } from "react";
import homeIcon from "../assets/home_i.png"
import { NavLink } from "react-router-dom";
import axios from "axios";

function RandomBeer() {
    const[beerR, setRandBeer] = useState({})

    useEffect(() => {
        async function getRandBeer() {
            const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers/random');
            setRandBeer(response.data);
        }
        getRandBeer()
    }, [])

    return(
        <>
            <nav>
                <NavLink to="/home"><img src={homeIcon} alt="home button" height= "30rem"/></NavLink>
            </nav>
            
            <div className="beer-row">
            {beerR.name  ? (
                <div className="beer-details">
                    <img src={beerR.image_url} alt={beerR.name} height="250rem"/>
                    <span className="beer-h1">
                        <h3>{beerR.name}</h3>
                        <h4>{beerR.attenuation_level}</h4>
                    </span>
                    <span className="beer-h2">
                        <h5>{beerR.tagline}</h5>
                        <h6>{beerR.first_brewed}</h6>
                    </span>
                    <p>{beerR.description}</p>
                    <strong>{beerR.contributed_by}</strong>
                </div>
                ):(<h3>Loading ...</h3>)}
            </div>
            
        </>
    )
}

export default RandomBeer;