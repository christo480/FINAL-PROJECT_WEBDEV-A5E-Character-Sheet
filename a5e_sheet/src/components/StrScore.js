import { DiceRoll, RollGroup } from '@dice-roller/rpg-dice-roller';
import '../styles/StrScore.css'
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
    function roll()
    {
      const roll =(new DiceRoll('1d20')).total+Math.floor((props.value-10)/2)
      console.log(roll)
      alert(props.name+" Roll "+roll)
    }
      return (
        
        <div className='Score_section'>
          <b>{props.name}</b>
          <p >{props.value}</p>
          <input id={props.name} type={'text'} onChange={printChange}></input>
          <i >{Math.floor((props.value-10)/2)}</i>
          <button onClick={roll}> ROLL</button>
        </div>
      );
    }  
   
    
  
  export default StrScore;