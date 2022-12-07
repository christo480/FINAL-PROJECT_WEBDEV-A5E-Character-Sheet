import { DiceRoll, RollGroup } from '@dice-roller/rpg-dice-roller'; 
function Score(props) {
    //A feature is a name and a description
    
      return (
        
        <div>
          <b>{props.name}</b>
          <p>{props.value}</p>
          
          <i>{(props.value-10)/2}</i>
        </div>
      );
    }  
   
    
  
  export default Score;