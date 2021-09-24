import React, { useState } from "react";
import axios from "axios";
import homeIcon from "../assets/home_i.png"
import { useHistory } from "react-router-dom";
import {NavLink} from 'react-router-dom';

function NewBeer() {
    const[name, setName] = useState("")
    const[tagline, setTagline] = useState("")
    const[description, setDescription] = useState("")
    const[first_brewed, setFirst_Brewed] = useState("")
    const[brewers_tips, setBrewers_Tips] = useState("")
    const[attenuatuion_level, setAttenuatuion_Level] = useState("")
    const[contributed_by, setContributed_By] = useState("")
    const history = useHistory();

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const body = {
            name: name,
            tagline: tagline,
            description: description,
            first_brewed: first_brewed,
            brewers_tips: brewers_tips,
            attenuatuion_level: attenuatuion_level,
            contributed_by: contributed_by,
        };
        await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", body);
        setName("");
        setTagline("");
        setDescription("");
        setFirst_Brewed("");
        setBrewers_Tips("");
        setAttenuatuion_Level("");
        setContributed_By("");
        history.push("/")
    };




    return(
        <>
            <nav>
                <NavLink to="/home"><img src={homeIcon} alt="home button" height= "30rem"/></NavLink>
            </nav>
            <div className="new-beer-container">
                <form onSubmit={handleFormSubmit} className="new-beer">
                    <label>Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required></input>
                    
                    <label>Tagline</label>
                    <input type="text" value={tagline} onChange={(e) => setTagline(e.target.value)} required></input>

                    <label>Description</label>
                    <textarea rows="10" cols="20" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>

                    <label>First Brewed</label>
                    <input type="text" value={first_brewed} onChange={(e) => setFirst_Brewed(e.target.value)} required></input>

                    <label>Brewers Tips</label>
                    <input type="text" value={brewers_tips} onChange={(e) => setBrewers_Tips(e.target.value)} required></input>

                    <label>Attenuation Level</label>
                    <input type="number" value={attenuatuion_level} onChange={(e) => setAttenuatuion_Level(e.target.value)} required></input>

                    <label>Contributed By</label>
                    <input type="text" value={contributed_by} onChange={(e) => setContributed_By(e.target.value)} required></input>

                    <button type="submit">ADD NEW</button>
                </form>
            </div>
        </>
    )

}

export default NewBeer;