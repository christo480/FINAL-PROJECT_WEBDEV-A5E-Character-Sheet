import React, { useState, useEffect } from "react";
import '../styles/Sheet.css';
import Header from './Header';
import Feature from "./Feature";
import Heritage_Section from "./Heritage_Section";
import Class_Section from "./Class_Section";
import { DiceRoll, RollGroup } from '@dice-roller/rpg-dice-roller'; 
import Culture_Section from "./Culture_Section";
import ABS from "./ABS"
import Roller from "./Roller";
import Generator from "./Generator";
import Special_Heritage from "./Special_Heritage";
import Background_Section from "./Background_Section";
import Destiny_Section from "./Destiny_Section";
import Spell_Section from "./Spell_Section";

function Sheet(props) {

  // Using a Dice roller api to genengerate 3d6 and 4d6 stats should satisfy public api use
  
  // Name and level
  const [Name,setName]= useState('');
  const [Level,setLevel]=useState(1);
  // Need to track all numbers on character sheet
  
  // Ability Scores
  const [Str, setStr] = useState(10);
  const [Dex, setDex] = useState(10);
  const [Int, setInt] = useState(10);
  const [Con, setCon] = useState(10);
  const [Wis, setWis] = useState(10);
  const [Cha, setCha] = useState(10);
  // Proficiency
  // Saves
  //


  //heritage={heritage} changeHeritage={setHeritage} class={Class} changeClass={setClass} culture={Culture} changeCulture={setCulture} background={Background} changeBackground={setBackground}
  
  //Focus on pull all data needed for this: https://a5e.tools/rules/urthek
  
  //Manage States of following variables
  const [Heritage, setHeritage] = useState({Name:"",Age:"",Size:"",Speed:""});
  const [Class, setClass] = useState({Name:"",HitDie:0,Proficiencies:"",Equipment:"",Features:""});
  const [Culture, setCulture] = useState({Features:"",Languages:""});
  const [Background, setBackground] = useState("");
  const [Destiny, setDestiny] = useState("");
  
  //Spells
  // Used to track spells that have been added to the character
  const [Spells,setSpells] = useState({hasSpells:"no",1:"",2:"",3:"",4:"",5:"",6:"",7:"",8:"",9:""});

  // Example link 
  //http://localhost:3200/db/findOne/test_database/test_collection/
  async function fetch_Heritage_Data(query) {
    let data
    
      //MongoDB server is used make sure server.js is running 
    let response = fetch('http://localhost:3200/db/findOne/test_database/test_collection/'+query)
    .then(response => response.json())
    data = await response
    // Check if its valid Heritage data - Will need to cover this check 
    if(data['Age'])
    {
    
    console.log(data)
    console.log(query)
    setHeritage(data)
   }
  }
  async function fetch_Class_Data(query) {

    let data
    
    //MongoDB server is used make sure server.js is running 
    let response = fetch('http://localhost:3200/db/findOne/test_database/test_collection/'+query)
    .then(response => response.json())
    
    data = await response
    // Check if its valid Heritage data - Will need to cover this check 
    if(data['HitDie'])
    {
      console.log(data)
      console.log(query)
      
      setClass(data);
    }
    if(Class.Name=='Bard' || Class.Name=='Sorcerer' || Class.Name=='Cleric' || Class.Name=='Druid')
    {
      let temp = Spells
      temp['hasSpells']='yes'
      setSpells(temp) 
    }
  }

  async function fetch_Culture_Data(query) {

    //Fetch for heritage data
    let response = fetch('http://localhost:3200/db/findOne/test_database/test_collection/'+query)
    .then(response => response.json())
    
    let data = await response
    console.log("Culture")
    if(data['Languages'])
    {
      console.log(data)
      console.log(query)
      
      setCulture(data);
    }
  }
  async function fetch_Background_Data(query) {

    //Fetch for heritage data
    let response = fetch('http://localhost:3200/db/findOne/test_database/test_collection/'+query)
    .then(response => response.json())
    
    let data = await response
    console.log("Background")
    console.log(data)
    console.log(query)
    
    setBackground(data);
  }
  async function fetch_Destiny_Data(query) {

    //Fetch for heritage data
    let response = fetch('http://localhost:3200/db/findOne/test_database/test_collection/'+query)
    .then(response => response.json())
    
    let data = await response
    console.log("Destiny")
    console.log(data)
    console.log(query)
    
    setDestiny(data);
  }
  function arbitrary_roll()
  {
    let query = document.getElementById("arbitrary_roll").value
    const roll = new DiceRoll(query)
    console.log(roll)
    alert(roll)
  }
  function heritage_data()
  {
    return Heritage
  }
  function class_data()
  {
    return Class
  }
  function culture_data()// When deadling with dynamic data a function must be sent for the data to be dynamically loaded
  {
    return Culture
  }
  function background_data()// When deadling with dynamic data a function must be sent for the data to be dynamically loaded
  {
    return Background
  }
  function destiny_data()// When deadling with dynamic data a function must be sent for the data to be dynamically loaded
  {
    return Destiny
  }

  function save_data(code)
  {
    console.log("SAVE DATA")
    let saved_data= {}
    // All data must be saved here
    saved_data['code'] = code
    saved_data['Name'] = Name
    saved_data['Level']= Level
    saved_data['Str']= Str
    saved_data['Dex']= Dex
    saved_data['Int']= Int
    saved_data['Con']= Con
    saved_data['Wis']= Wis
    saved_data['Cha']= Cha
    saved_data['Heritage']=Heritage
    saved_data['Class']=Class
    saved_data['Culture']=Culture
    saved_data['Background']=Background
    saved_data['Destiny']=Destiny
    fetch('http://localhost:3200/save/test_database/userdata_a5esheet/', {  // Enter your IP address here
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(saved_data) // body data type must match "Content-Type" header

    })
    //console.log(saved_data)
  }

  async function load_data(code)
  {
    let response = fetch('http://localhost:3200/load/test_database/userdata_a5esheet/'+code)
    .then(response => response.json())
    let data = await response
    console.log(data)
    setName(data['Name'])
    setLevel(data['Level'])
    setStr(data['Str'])
    setDex(data['Dex'])
    setInt(data['Int'])
    setCon(data['Con'])
    setWis(data['Wis'])
    setCha(data['Cha'])
    setHeritage(data['Heritage'])
    setClass(data['Class'])
    setCulture(data['Culture'])
    setBackground(data['Background'])
    setDestiny(data['Destiny'])
  }

    return (
      <div className="sheet_App">
        <Header name ={Name} name_updater={setName} level={Level} level_updater={setLevel} heritage_updater={fetch_Heritage_Data} class_updater={fetch_Class_Data} culture_updater={fetch_Culture_Data} background_updater={fetch_Background_Data} destiny_updater={fetch_Destiny_Data}></Header>
        {/* <input type="text" id="arbitrary_roll" ></input>
        <button onClick={arbitrary_roll}> Roll</button>  */}
        <div className="rollers">
          <Roller></Roller>
          <Generator Str={Str} Str_setter={setStr} Dex={Dex} Dex_setter={setDex} Con={Con} Con_setter={setCon} Int={Int} Int_setter ={setInt} Wis={Wis} Wis_setter = {setWis} Cha={Cha} Cha_setter={setCha} save_func={save_data} load_func={load_data}></Generator>
        </div>
        
        <hr></hr>
        <div className="sheet_body">
        <Heritage_Section Name={Heritage.Name} Age={Heritage.Age} Size={Heritage.Size} Speed={Heritage.Speed}></Heritage_Section>
        <Special_Heritage Name={Heritage.Name} data_func={heritage_data}></Special_Heritage> 
        <Class_Section Name={Class.Name} HitDie={Class.HitDie} Level={Level} data={class_data} Con={Con}></Class_Section>
         
        </div>
        <hr></hr>
        <ABS Str={Str} Str_setter={setStr} Dex={Dex} Dex_setter={setDex} Con={Con} Con_setter={setCon} Int={Int} Int_setter ={setInt} Wis={Wis} Wis_setter = {setWis} Cha={Cha} Cha_setter={setCha}></ABS>
        <hr></hr>
        <Culture_Section data= {culture_data}></Culture_Section>
        <Background_Section data={background_data}></Background_Section>
        <Destiny_Section data={destiny_data}></Destiny_Section>
        <Spell_Section Spells={Spells}></Spell_Section>
      </div>
    );
  }
  
  export default Sheet;