import React from 'react'
import '../styles/Sheet.css';
import Header from './Header';

function Sheet() {
    return (
      <div className="sheet_App">
        <Header></Header>
        <div className="sheet_body">
            Sheet Body
        </div>
        
      </div>
    );
  }
  
  export default Sheet;