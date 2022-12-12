import Feature from "./Feature";
function CFeature(props) {
    //A feature is a name and a description
    //console.log(props)
    
    let data= props.data()
    //if(data['Choices'])// If we get the worng sort of data we don't
    if(typeof data!=='undefined') 
    {
        let Features= Object.keys(data)
        console.log(data)
        
        return(
            <div className="choice">
            
            {
                Features.map((val,idx)=>{
                    console.log(idx)
                    console.log(val)
                    
                    return(<Feature title={val} value={data[val]}></Feature>)    
                    
                    
                    

                })
            }
            </div>
        );
    }
    
}
  
export default CFeature;