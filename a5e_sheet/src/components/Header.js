


function Header(props) {
  
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
        <form>
        <label>Heritage:</label>
        <input type="text" id="heritage" name="heritage" onChange={get_heritage}></input>
        
        </form>
      </div>
    );
  }
  
  export default Header;