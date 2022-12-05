import React, { useState, useEffect } from "react";
import '../styles/Sheet.css';
import Header from './Header';
import Feature from "./Feature";
import Heritage_Section from "./Heritage_Section";
function Sheet(props) {

  // Need to track all numbers on character sheet
  // Ability Scores
  // Proficiency
  // Saves
  //

  //Focus on pull all data needed for this: https://a5e.tools/rules/urthek
  const [Heritage, setHeritage] = useState({Name:"",Age:"",Size:"",Speed:""});
  // Example link 
  //http://localhost:3200/db/findOne/test_database/test_collection/
  async function fetchData(query) {

    
    let response = await fetch('https://christo480.github.io/WEBDEV/Heritage/'+query+".json")
    
    let data = await response.json()
    console.log(data)
    console.log(query)
    
    setHeritage({Name:data.Name,Age:data.Age,Size:data.Size,Speed:data.Speed});
  }

  
    return (
      <div className="sheet_App">
        <Header heritage_updater={fetchData} ></Header>
        <div className="sheet_body">
        <Heritage_Section Name={Heritage.Name} Age={Heritage.Age} Size={Heritage.Size} Speed={Heritage.Speed}></Heritage_Section> 
        </div>
        <hr></hr>
        
      </div>
    );
  }
  
  export default Sheet;