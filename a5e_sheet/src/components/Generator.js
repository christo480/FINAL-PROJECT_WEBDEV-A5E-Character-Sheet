import { DiceRoll, RollGroup } from '@dice-roller/rpg-dice-roller'; 
function Generator(props) {

  //
  // Code for Generators
  //
  function Generate_roll_array(query,size)
  {
    let arr = Array()
    for (let i =0; i<=size;i++)
    {
        arr.push((new DiceRoll(query)).total)
    }
    return arr
  }
  function Generate_3d6()
  {
    let query = document.getElementById("arbitrary_roll").value
    let roll_arr =  Generate_roll_array('1d6',3).sort()
    console.log(roll_arr)
    roll_arr.splice(0,1)
    let sum = roll_arr.reduce((sum,val)=> sum+val)
    return (sum)
    // console.log(roll_arr)
    // alert(roll_arr)
  }
  function Generate_3d6_all()
  {
    props.Str_setter(Generate_3d6())
    props.Dex_setter(Generate_3d6())
    props.Con_setter(Generate_3d6())
    props.Int_setter(Generate_3d6())
    props.Wis_setter(Generate_3d6())
    props.Cha_setter(Generate_3d6())
  }
  function Generate_4d6_all()
  {
    props.Str_setter(Generate_4d6())
    props.Dex_setter(Generate_4d6())
    props.Con_setter(Generate_4d6())
    props.Int_setter(Generate_4d6())
    props.Wis_setter(Generate_4d6())
    props.Cha_setter(Generate_4d6())
  }
  function Generate_4d6()
  {
    let query = document.getElementById("arbitrary_roll").value
    let roll_arr =  Generate_roll_array('1d6',4).sort()
    console.log(roll_arr)
    roll_arr.splice(0,1)
    let sum = roll_arr.reduce((sum,val)=> sum+val)
    return sum
    //console.log(roll_arr)
    //alert(roll_arr)
  }

  // Saving 
      return (
        
        <div>
           
            <button onClick={Generate_3d6_all}> Generate 3d6 Stats</button> 
            <button onClick={Generate_4d6}> Generate 4d6 Stats</button>
            <button onClick={props.save_func}>Save Sheet</button>
            <button onClick={props.load_func}>Load Data</button> 
        </div>
      );
      
   
    }
  
export default Generator;
