import Feature from "./Feature";
function Culture_Section(props) {
    //A feature is a name and a description
    //console.log(props)
    
    let data= props.data()
    if(data['Features']){
        
        let Features =Object.keys(data.Features)
        //console.log(data)
        return (
            <div>
            <h2>{data.Name}</h2>
            {
                Features.map((val,idx)=>{
                    return(
                        <Feature title={val} value={data.Features[val]}></Feature>
                    )

                })
            }
            <Feature title="Languages" value={data.Languages}></Feature>
            {/* <Feature title="Set" value={props.Set["Brigand’s Set"]["Cost"]}></Feature> */}
            <hr></hr>
            </div>
        );}
    else
    {
        return(
            <div>
            <hr></hr>
            </div>
        );
    }
    
    }
  
export default Culture_Section;