import '../styles/Header.css'
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
function get_class(event)
{
 
  //fetch call that pulls heritage data from mongoDB
  //should set react state webhook to update features dynamically

  console.log(event.target.value)//prints value of input
  let input =event.target.value
  props.class_updater(input)
}
function get_culture(event)
{
 
  //fetch call that pulls heritage data from mongoDB
  //should set react state webhook to update features dynamically

  console.log(event.target.value)//prints value of input
  let input =event.target.value
  props.culture_updater(input)
}
    return (
      <div className="Header_App">
      
        <label>Class</label>
        <input list='classes' input='text' id="class" name="class" onChange={get_class}></input>
        <datalist id='classes'>
          <option value={'Fighter'}></option>
        </datalist>
        <label>Heritage</label>
        <input type="text" list='heritages' id="heritage" name="heritage" onChange={get_heritage}></input>
        <datalist id='heritages'>
          <option value={'Dragonborn'}></option>
        </datalist>
        <label>Culture</label>
        <input type="text" id="culture" list ='cultures' name="culture" onChange={get_culture}></input>
        <datalist id='cultures'>
          <option value={'Caravanner'}></option>
        </datalist>
        <label>Background</label>
        <input type="text" id="background" name="background" onChange></input>
        <label>Destiny</label>
        <input type="text" id="destiny" name="destiny" onChange></input>
        
      </div>
    );
  }
  
  export default Header;