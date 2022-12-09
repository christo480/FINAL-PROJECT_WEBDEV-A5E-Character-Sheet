import { DiceRoll, RollGroup } from '@dice-roller/rpg-dice-roller'; 
function Roller(props) {
    function arbitrary_roll()
  {
    let query = document.getElementById("arbitrary_roll").value
    const roll = new DiceRoll(query)
    console.log(roll)
    alert(roll)
  }
      return (
        
        <div>
           <input type="text" id="arbitrary_roll" ></input>
            <button onClick={arbitrary_roll}> Roll</button> 
        </div>
      );
      
   
    }
  
export default Roller;
