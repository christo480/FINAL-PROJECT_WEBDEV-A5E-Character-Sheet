import Feature from "./Feature";
function Class_Section(props) {
    const Level =props.Level
    const data = props.data()
    let HD=(data.HitDie)
    const Con_Mod= Math.floor((props.Con-10)/2)
    
    let average_HD = HD/2+1
    console.log(Con_Mod)
    //A feature is a name and a description
      return (
        <div>
          <b>Class</b>
          <hr></hr>
          <Feature title="" value={props.Name}></Feature>
          <Feature title="HitDie" value={props.HitDie}></Feature>
          <Feature title="HP" value={HD+Level*Con_Mod+(Level-1)*average_HD}></Feature>
        
          {/* <Feature title="Set" value={props.Set["Brigand’s Set"]["Cost"]}></Feature> */}
          {/* <Feature title="Features" value={props.Features['1']["Fighting Style"]["Choices"]["ARCHERY"]}></Feature>  */}
        </div>
      );
      
    }
  
export default Class_Section;