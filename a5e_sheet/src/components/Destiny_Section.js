import Feature from "./Feature";
function Destiny_Section(props) {
    //A feature is a name and a description
    //console.log(props)
    
    let data= props.data()
    if(data['Source of Inspiration'])// If we get the worng sort of data we don't 
    {
        let Features= Object.keys(data)
        console.log(data)
        
        return(
            <div>
            <b>Destiny</b>
            <hr></hr>
            {
                Features.map((val,idx)=>{
                    console.log(idx)
                    console.log(val)
                    if(idx==4)
                    {

                    }
                    else if(idx<2)
                    {

                    }
                    else{
                    console.log(val)
                    return(<Feature title={val} value={data[val]}></Feature>)    
                    }
                    
                    

                })
            }
            </div>
        );
    }
    
}
  
export default Destiny_Section;