import React, { useState, useEffect } from "react";
import '../styles/Sheet.css';
import Header from './Header';
import Feature from "./Feature";
function Sheet(props) {
  const [data, setData] = useState(null);
  // Example link 
  //http://localhost:3200/db/findOne/test_database/test_collection/
  async function fetchData(query) {

    
    let response = await fetch('https://christo480.github.io/WEBDEV/Heritage/'+query+".json")
    
    let data = await response.json()
    console.log(data)
    console.log(query)
    
    setData(data.Age);
  }

  
    return (
      <div className="sheet_App">
        <Header heritage={data} heritage_updater={fetchData} ></Header>
        <div className="sheet_body">
            <Feature Age={data}></Feature>
        </div>
        
      </div>
    );
  }
  
  export default Sheet;