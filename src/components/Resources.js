import React, { useState, useEffect }from "react";

function Resources() {

    const [resources, setResources] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/resources')
        .then(response => response.json())
        .then(resourcesData => setResources(resourcesData))
    }, [])


    return (
    <div className="backimg">
        <h2 className="resources">Resources</h2>
        <div className="deck">
            <div className="card">
                {resources.map(resource => {
                    return (
                <div key={resource.id}>
                    <h3 className="card-title">{resource.title}</h3>
                     <p className="card-info">{resource.description}</p>
                 </div>
                )})
                }
            </div>
       </div>    
    </div>
    )
}

export default  Resources