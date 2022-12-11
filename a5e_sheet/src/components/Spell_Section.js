import Feature from "./Feature";
import { useRef } from "react";
import '../styles/Heritage_Section.css';
function Spell_Section(props) {
    const spell_query = useRef(null);
    if(props.Spells['hasSpells']!='no')
    {
        
        function search_spell()
        {
            let query= spell_query.current.value
        }
        // Render Spells and allow Adding spell
        return (
            <div>
            <b>Spells</b>
            <hr></hr>
            <input type="text" id="spell_search" name="spell_search" placeholder="Enter a spell name" ref={spell_query}></input>
            <button onClick={search_spell}>Search</button> 
            <hr></hr>
            </div>

        );
    }
    }
  
export default Spell_Section;