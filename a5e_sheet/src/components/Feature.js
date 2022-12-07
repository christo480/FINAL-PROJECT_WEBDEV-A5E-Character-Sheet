function Feature(props) {
  //A feature is a name and a description
  if(props.title==="Age" || props.title==="Size")
  {
    //If Age is being rendered we only care about last sentance where max life expentency is stated
    let string = props.value
    string = string.split('.')
    console.log(string[string.length-2])
    let last_sentence=string[string.length-2]
    return (
      
      <div>
        <b>{props.title}</b><p>{last_sentence}</p>
      </div>
    );
  }
  else
  {
    return (
      
      <div>
        <b>{props.title}</b><p>{props.value}</p>
      </div>
    );
  }  
 
  }

export default Feature;