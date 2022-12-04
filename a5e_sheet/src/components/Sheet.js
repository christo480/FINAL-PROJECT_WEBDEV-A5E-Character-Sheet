import React, { useState, useEffect } from "react";
import '../styles/Sheet.css';
import Header from './Header';

function Sheet(props) {
  const [data, setData] = useState("null");
  // Example link 
  //http://localhost:3200/db/findOne/test_database/test_collection/
  async function fetchData(query) {
    const response = await fetch('https://raw.githubusercontent.com/christo480/FINAL-PROJECT_WEBDEV/main/Heritage/Dragonborn.json?token=GHSAT0AAAAAABYGN4JF2NOFHH5KOU52MYMWY4MFBRA');
    console.log(query)
    //setData(await response.json());
  }

  
    return (
      <div className="sheet_App">
        <Header heritage={data} heritage_updater={fetchData} ></Header>
        <div className="sheet_body">
            {data}
        </div>
        
      </div>
    );
  }
  
  export default Sheet;