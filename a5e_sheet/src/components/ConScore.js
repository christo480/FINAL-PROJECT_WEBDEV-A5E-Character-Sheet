import { DiceRoll, RollGroup } from '@dice-roller/rpg-dice-roller';
import '../styles/StrScore.css'
function ConScore(props) {
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
      const roll =(new DiceRoll('1d20'))
      const result=roll.total+Math.floor((props.value-10)/2)
      console.log(props.name+"Roll "+roll+"+"+Math.floor((props.value-10)/2)+"="+result)
      alert(props.name+"Roll "+roll+"+"+Math.floor((props.value-10)/2)+"="+result)
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

export default ConScore;