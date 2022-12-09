import { DiceRoll, RollGroup } from '@dice-roller/rpg-dice-roller'; 
function StrScore(props) {
    //A feature is a name and a description
    function printChange(event)
    {
      let value=event.target.value
      console.log(value)
      if (parseInt(value))
      {
        props.setter(value)
      }
    }
      return (
        
        <div>
          
          <b>{props.name}</b>
          <p >{props.value}</p>
          <input id={props.name} type={'text'} onChange={printChange}></input>
          <i>{(props.value-10)/2}</i>
        </div>
      );
    }  
   
    
  
  export default StrScore;