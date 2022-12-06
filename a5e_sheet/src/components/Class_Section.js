import Feature from "./Feature";
function Class_Section(props) {
    //A feature is a name and a description
      return (
        <div>
          <Feature title="Class" value={props.Name}></Feature>
          <Feature title="HitDie" value={props.HitDie}></Feature>
          {/* <Feature title="Set" value={props.Set["Brigand’s Set"]["Cost"]}></Feature> */}
          {/* <Feature title="Features" value={props.Features['1']["Fighting Style"]["Choices"]["ARCHERY"]}></Feature>  */}
        </div>
      );
    }
  
export default Class_Section;