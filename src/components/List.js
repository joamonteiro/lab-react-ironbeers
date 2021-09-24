import React, { useState, useEffect } from "react";
import homeIcon from "../assets/home_i.png"
import { NavLink } from "react-router-dom";
import axios from "axios";

function List() {
    const[beers, setBeers] = useState([]);

    useEffect(() => {
        async function getBeers() {
            const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers")
            setBeers(response.data);
        }
        getBeers()
    },[])

    return(
        <>
            <nav>
                <NavLink to="/home"><img src={homeIcon} alt="home button" height= "30rem"/></NavLink>
            </nav>
            <div className="card-container">
                {beers.length > 0 ? ( 
                    beers.map((beer) => {
                        return(
                            <div className="card-row">
                                <div className="card-beer">
                                    <div className="card-img">
                                        <NavLink to={`/${beer._id}`}><img src={beer.image_url} alt={beer.name} height="200rem"/></NavLink>
                                    </div>
                                    <div className="card-beer-content">
                                        <NavLink to={`/${beer._id}`} style={{ textDecoration: 'none' }}><h3>{beer.name}</h3></NavLink>
                                        <h5>{beer.tagline}</h5>
                                        <p><strong>Created by:</strong>{beer.contributed_by}</p>
                                    </div>
                                </div>
                            </div>
                        )
                }) ):( <h3>Loading ...</h3>)}
            </div>
        </>
    )
}

export default List;