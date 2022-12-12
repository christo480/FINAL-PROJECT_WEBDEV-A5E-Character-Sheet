import '../styles/Header.css'
function Header(props) {
  // FOrmat input tags
  function generate_range(size)
  {
    let arr = Array()
    for(let i =1; i<=size;i++)
    {
      arr.push(i)
    }
    return arr 
  }
  async function get_heritage(event)
  {
  
    //fetch call that pulls heritage data from mongoDB
    //should set react state webhook to update features dynamically

    //console.log(event.target.value)//prints value of input
    if(event.target.value!="")
    {
      let input =event.target.value
      props.heritage_updater(input)
    }
  }
  function get_class(event)
  {
  
    //fetch call that pulls heritage data from mongoDB
    //should set react state webhook to update features dynamically
    if(event.target.value!="")
    {
      console.log(event.target.value)//prints value of input
      let input =event.target.value
      props.class_updater(input)
    }
  }
  function get_culture(event)
  {
  
    //fetch call that pulls heritage data from mongoDB
    //should set react state webhook to update features dynamically
    if(event.target.value!="")
    {
      console.log(event.target.value)//prints value of input
      let input =event.target.value
      props.culture_updater(input)
    }
  }
  function get_background(event)
  {
  
    //fetch call that pulls heritage data from mongoDB
    //should set react state webhook to update features dynamically
    if(event.target.value!="")
    {
      console.log(event.target.value)//prints value of input
      let input =event.target.value
      props.background_updater(input)
    }
  }
  function get_destiny(event)
  {
  
    //fetch call that pulls heritage data from mongoDB
    //should set react state webhook to update features dynamically
    if(event.target.value!="")
    {
      console.log(event.target.value)//prints value of input
      let input =event.target.value
      props.destiny_updater(input)
    }
  }
  function get_Name(event)
  {
  
    //fetch call that pulls heritage data from mongoDB
    //should set react state webhook to update features dynamically

    console.log(event.target.value)//prints value of input
    let input =event.target.value
    props.name_updater(input)
  }
  function get_Level(event)
  {
  
    //fetch call that pulls heritage data from mongoDB
    //should set react state webhook to update features dynamically

    console.log(event.target.value)//prints value of input
    //console.error(generate_range(props.level))
    let input =event.target.value
    props.level_updater(input)
  }
    return (
      <div className="Header_App">
        <div className='user'>
          Name:{props.name}<input input='text' id="name" name="name" onChange={get_Name}></input>
          Level:{props.level}<input input='text' id="level" name="level" onChange={get_Level}></input>
        </div>
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
        <input type="text" id="background" list="backgrounds" name="background" onChange={get_background}></input>
        <datalist id='backgrounds'>
          <option value={'Excellence'}></option>
          <option value={'Farmer'}></option>
        </datalist>
        <label>Destiny</label>
        <input type="text" id="destiny" list="destinies" name="destiny" onChange={get_destiny}></input>
        <datalist id='destinies'>
          <option value={'Chaos'}></option>
          <option value={'Coming of Age'}></option>
          <option value={'Devotion'}></option>
          <option value={'Dominion'}></option>
          <option value={'Excellence'}></option>
          <option value={'Revenge'}></option>
        </datalist>
      </div>
    );
  }
  
  export default Header;