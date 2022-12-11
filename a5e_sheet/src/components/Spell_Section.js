import Feature from "./Feature";
import '../styles/Heritage_Section.css';
function Spell_Section(props) {
    if(props.Spells['hasSpells']!='no')
    {
        // Render Spells and allow Adding spell
        return (
            <div>
            <b>Spells</b>
            <hr></hr>
            <Feature title="Heritage" value={props.Name}></Feature>
            <Feature title="Age" value={props.Age}></Feature>
            <Feature title="Size" value={props.Size}></Feature>
            <Feature title="Speed" value={props.Speed}></Feature>
            <hr></hr>
            </div>

        );
    }
    }
  
export default Spell_Section;