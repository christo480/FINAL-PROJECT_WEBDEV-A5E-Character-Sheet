import Feature from "./Feature";
import '../styles/Heritage_Section.css';
function Heritage_Section(props) {
    //A feature is a name and a description
      return (
        <div>
          <Feature title="Heritage" value={props.Name}></Feature>
          <Feature title="Age" value={props.Age}></Feature>
          <Feature title="Size" value={props.Size}></Feature>
          <Feature title="Speed" value={props.Speed}></Feature>
          <hr></hr>
        </div>

      );
    }
  
export default Heritage_Section;