function Feature(props) {
  //A feature is a name and a description
    
  return (
      
      <div>
        <b>{props.title}</b><p>{props.value}</p>
      </div>
    );
  }

export default Feature;