import React, { useState, useEffect } from "react";


function MenTypes() {

    const [profesions, setProfesions] = useState([])
    const [locations, setLocation] = useState([])
    const [backgrounds, setBackground] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/profesions')
        .then(response => response.json())
        .then(profesionsData => setProfesions(profesionsData))
    }, [])

    useEffect(() => {
        fetch('http://localhost:9000/location')
        .then(response => response.json())
        .then(locationData => setLocation(locationData))
    }, [])

    useEffect(() => {
        fetch('http://localhost:4000/background')
        .then(response => response.json())
        .then(backgroundData => setBackground(backgroundData))
    }, [])

    return (
    <div className="mentypes">
        <div>
            <h2 className="mentypes-title">NYC men types</h2>
        </div>
        <div>
            <h2 className="profession-title">Profession</h2>
            <ul className="list">
                {profesions.map(profesion => {
                    return (
                <li key={profesion.id}>
                    <h2>{profesion.number}</h2>
                    <h3>{profesion.title}</h3>
                    <p>{profesion.description}</p>
                </li>
                    )
                })}
            </ul>
    
            <h2 className="location-title">Location</h2>
            <ul className="list">
            {locations.map(location => {
                    return (
                <li key={location.id}>
                    <h2>{location.number}</h2>
                    <h3>{location.title}</h3>
                    <p>{location.description}</p>
                </li>
                    )
                })}
            </ul>
                
        
            <h2 className="age-title">Age</h2>
            <ul className="list">
	<li>
		<h2>01</h2>
		<h3>21-27</h3>
		<p>
			Lorem Ipsum is simply dummy text of the printing and typesetting   
			industry. Lorem Ipsum has been the industry's standard dummy text ever 
			since the 1500s.
		</p>
	</li>
	<li>
		<h2>02</h2>
		<h3>27-35</h3>
		<p>
			When an unknown printer took a galley of type and scrambled it to make 
			a type specimen book. It has survived not only five centuries.
		</p>
	</li>
	<li>
		<h2>03</h2>
		<h3>35-45</h3>
		<p>
			But also the leap into electronic typesetting, remaining essentially 
			unchanged. It was popularised in the 1960s.
		</p>
	</li>
	<li>
		<h2>04</h2>
		<h3>45+</h3>
		<p>
			With the release of Letraset sheets containing Lorem Ipsum passages,  
			and more recently with desktop publishing software like Aldus PageMaker 
			including versions of Lorem Ipsum.
		</p>
	</li>
</ul>
        
            <h2 className="background-title">Background</h2>
            <ul className="list">
            {backgrounds.map(background => {
                    return (
                <li key={background.id}>
                    <h2>{background.number}</h2>
                    <h3>{background.title}</h3>
                    <p>{background.description}</p>
                </li>
                    )
                })}
            </ul>
        </div>
    </div>
    )
}

export default MenTypes