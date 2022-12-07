import Score from "./Score";
import '../styles/ABS.css'
function ABS(props) {
    // Renders ability scores for character
      return (
        
        <div>
          <b>Ability Scores</b>
          <div className="scores">
            <Score name="Str" value={8}></Score>
            <Score name="Dex" value={10}></Score>
            <Score name="Con" value={10}></Score>
            <Score name="Int" value={10}></Score>
            <Score name="Wis" value={10}></Score>
            <Score name="Cha" value={10}></Score>
          </div>
        </div>
      );
    }  
   
    
  
  export default ABS;