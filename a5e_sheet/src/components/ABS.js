import Score from "./Score";
import '../styles/ABS.css'
import StrScore from "./StrScore"; 
function ABS(props) {
    // Renders ability scores for character
      return (
        
        <div>
          <b>Ability Scores</b>
          <div className="scores">
            <StrScore name="Str" value={props.Str} setter={props.Str_setter}></StrScore>
            <Score></Score>
            <Score></Score>
            <Score></Score>
            <Score></Score>
            <Score></Score>
             {/*<DexScore name="Dex" value={props.Dex}></DexScore>
            <ConScore name="Con" value={props.Con}></ConScore>
            <IntScore name="Int" value={props.Int}></IntScore>
            <WisScore name="Wis" value={props.Wis}></WisScore>
            <ChaScore name="Cha" value={props.Cha}></ChaScore> */}
          </div>
        </div>
      );
    }  
   
    
  
  export default ABS;