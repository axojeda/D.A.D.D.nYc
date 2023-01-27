
import React, { useEffect, useState } from "react";
import RedFlagsForm from "./RedFlagsForm";
//import Search from "./Search";

function RedFlags() {
 // Filter
    /*const [searchTerm, setSearchTerm] = useState("")
    const displayRedFlags = redFlags.filter((redFlag) => {
        return redFlag.description.toLowerCase().includes(searchTerm.toLowerCase())
    })*/

    const [redFlags, setRedFlags] = useState([])

    useEffect(() => {
        fetch('http://localhost:7000/redFlags')
        .then(response => response.json())
        .then(redFlagsData => setRedFlags(redFlagsData))
    }, [])

    const addNewRedFlag = (newObj) => {
        // sending new object to a database
        fetch('http://localhost:7000/redFlags', {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newObj)
        })
        .then(r => r.json())
        .then(redFlagsdata => setRedFlags([...redFlags, redFlagsdata]))
      }
      
return (
<div>
    <div>
        <h2 className="redflags-title">Red Flags</h2>
    </div>
    {/*<Search setSearchTerm={setSearchTerm}/>*/}
    <div>
        <h3 className="redflags-list">List of Red Flags:</h3>
        {redFlags.map(redFlag => {
            return (
            <div key={redFlag.id}>
                <h3 className="redflag-title">{redFlag.title}</h3>
                    <p className="redflag-description">{redFlag.description}</p>
          </div>
         ) })
    }
    </div>
    <div>
        <RedFlagsForm addNewRedFlag={addNewRedFlag} />
    </div>
</div>
)
}


export default RedFlags