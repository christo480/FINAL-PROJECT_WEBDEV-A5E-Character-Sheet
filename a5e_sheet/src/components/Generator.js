import { DiceRoll, RollGroup } from '@dice-roller/rpg-dice-roller'; 
function Generator(props) {
    function arbitrary_roll()
  {
    let query = document.getElementById("arbitrary_roll").value
    const roll = new DiceRoll(query)
    console.log(roll)
    alert(roll)
  }
  function Generate_3d6()
  {
    let query = document.getElementById("arbitrary_roll").value
    const roll = new DiceRoll(query)
    console.log(roll)
    alert(roll)
  }
  function Generate_4d6()
  {
    let query = document.getElementById("arbitrary_roll").value
    const roll = new DiceRoll(query)
    console.log(roll)
    alert(roll)
  }
      return (
        
        <div>
           
            <button onClick={Generate_3d6}> Generate 3d6 Stats</button> 
            <button onClick={Generate_4d6}> Generate 4d6 Stats</button> 
        </div>
      );
      
   
    }
  
export default Generator;
