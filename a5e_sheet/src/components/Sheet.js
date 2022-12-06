import React, { useState, useEffect } from "react";
import '../styles/Sheet.css';
import Header from './Header';
import Feature from "./Feature";
import Heritage_Section from "./Heritage_Section";
import Class_Section from "./Class_Section";
import { DiceRoll, RollGroup } from '@dice-roller/rpg-dice-roller'; 
import Culture_Section from "./Culture_Section";

// function arbitrary_roll()
//   {
//     let query = document.getElementById("arbitrary_roll").value
//     const roll = new DiceRoll(query)
//     alert(roll.total)
//   }
function Sheet(props) {

  // Using a Dice roller api to genengerate 3d6 and 4d6 stats should satisfy public api use
 

  // Need to track all numbers on character sheet
  
  // Ability Scores
  // Proficiency
  // Saves
  //


  //heritage={heritage} changeHeritage={setHeritage} class={Class} changeClass={setClass} culture={Culture} changeCulture={setCulture} background={Background} changeBackground={setBackground}
  
  //Focus on pull all data needed for this: https://a5e.tools/rules/urthek
  
  //Manage States of following variables
  const [Heritage, setHeritage] = useState({Name:"",Age:"",Size:"",Speed:""});
  const [Class, setClass] = useState({Name:"",HitDie:"",Proficiencies:"",Equipment:"",Features:""});
  const [Culture, setCulture] = useState({Features:"",Languages:""});
  const [Background, setBackground] = useState("");
  const [Destiny, setDestiny] = useState("");
  
  // Example link 
  //http://localhost:3200/db/findOne/test_database/test_collection/
  async function fetch_Heritage_Data(query) {

    //Fetch for heritage data
    let response = await fetch('https://christo480.github.io/WEBDEV/Heritage/'+query+".json")
    
    let data = await response.json()
    console.log(data)
    console.log(query)
    
    setHeritage({Name:data.Name,Age:data.Age,Size:data.Size,Speed:data.Speed});
  }
  async function fetch_Class_Data(query) {

    //Fetch for heritage data
    console.log(query)
    let response = await fetch('https://christo480.github.io/WEBDEV/Class/'+query+".json")
    
    let data = await response.json()
    console.log(data)
    console.log(query)
    
    setClass({Name:data.Name,HitDie:data.HitDie,Sets:data.Equipment});
  }

  async function fetch_Culture_Data(query) {

    //Fetch for heritage data
    console.log(query)
    let response = await fetch('https://christo480.github.io/WEBDEV/Culture/'+query+".json")
    
    let data = await response.json()
    console.log("Culture")
    console.log(data)
    console.log(query)
    
    setCulture({Features:data.Features,Languages:data.Languages});
  }
  function culture_data()// When deadling with dynamic data a function must be sent for the data to be dynamically loaded
  {
    return Culture
  }
    return (
      <div className="sheet_App">
        <Header heritage_updater={fetch_Heritage_Data} class_updater={fetch_Class_Data} culture_updater={fetch_Culture_Data}></Header>
        <input type="text" id="arbitrary_roll" ></input>
        {/* <button onClick={arbitrary_roll()}> Roll</button> */}
        <hr></hr>
        <div className="sheet_body">
        <Heritage_Section Name={Heritage.Name} Age={Heritage.Age} Size={Heritage.Size} Speed={Heritage.Speed}></Heritage_Section> 
        <Class_Section Name={Class.Name} HitDie={Class.HitDie}></Class_Section>
        <Culture_Section data= {culture_data}></Culture_Section> 
        </div>
        <hr></hr>
        
      </div>
    );
  }
  
  export default Sheet;