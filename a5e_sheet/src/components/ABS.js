import Score from "./Score";
import '../styles/ABS.css'
import StrScore from "./StrScore";
import DexScore from "./DexScore"; 
import ConScore from "./ConScore";
import IntScore from "./IntScore";
import WisScore from "./WisScore";
import ChaScore from "./ChaScore";
function ABS(props) {
    // Renders ability scores for character
      return (
        
        <div>
          <b>Ability Scores</b>
          <br></br>
          <div className="scores">
            <StrScore name="Str" value={props.Str} setter={props.Str_setter}></StrScore>
            <DexScore name="Dex" value={props.Dex} setter={props.Dex_setter}></DexScore>
            <ConScore name="Con" value={props.Con} setter={props.Con_setter}></ConScore>
            <IntScore name="Int" value={props.Int} setter={props.Int_setter}></IntScore>
            <WisScore name="Wis" value={props.Wis} setter={props.Wis_setter}></WisScore>
            <ChaScore name="Cha" value={props.Cha} setter={props.Cha_setter}></ChaScore> {/**/}
          </div>
        </div>
      );
    }  
   
    
  
  export default ABS;