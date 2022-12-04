


function Header(props) {
  // FOrmat input tags
async function get_heritage(event)
{
 
  //fetch call that pulls heritage data from mongoDB
  //should set react state webhook to update features dynamically

  //console.log(event.target.value)//prints value of input
  let input =event.target.value
  props.heritage_updater(input)
}
    return (
      <div className="sheet_App">
        
        <label>Class:</label>
        <input type="text" id="heritage" name="class" onChange></input>
        <label>Heritage:</label>
        <input type="text" id="heritage" name="heritage" onChange={get_heritage}></input>
        <label>Culture:</label>
        <input type="text" id="heritage" name="culture" onChange></input>
        <label>Background:</label>
        <input type="text" id="heritage" name="background" onChange></input>
        <label>Destiny:</label>
        <input type="text" id="heritage" name="destiny" onChange></input>
        
      </div>
    );
  }
  
  export default Header;