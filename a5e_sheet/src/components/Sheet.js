import React, { useState, useEffect } from "react";
import '../styles/Sheet.css';
import Header from './Header';
import Feature from "./Feature";
function Sheet(props) {

  // Need to track all numbers on character sheet
  // Ability Scores
  // Proficiency
  // Saves
  //

  //Focus on pull all data needed for this: https://a5e.tools/rules/urthek
  const [data, setData] = useState(null);
  // Example link 
  //http://localhost:3200/db/findOne/test_database/test_collection/
  async function fetchData(query) {

    
    let response = await fetch('https://christo480.github.io/WEBDEV/Heritage/'+query+".json")
    
    let data = await response.json()
    console.log(data)
    console.log(query)
    
    setData(data.Size);
  }

  
    return (
      <div className="sheet_App">
        <Header heritage={data} heritage_updater={fetchData} ></Header>
        <div className="sheet_body">
            <Feature title="Size" value={data}></Feature>
        </div>
        
      </div>
    );
  }
  
  export default Sheet;