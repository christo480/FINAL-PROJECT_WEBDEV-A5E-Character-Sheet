import Feature from "./Feature";
function Background_Section(props) {
    //A feature is a name and a description
    //console.log(props)
    
    let data= props.data()
    let Features= Object.keys(data)
    console.log(data) 
    return(
        <div>
        <b>Background</b>
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
        <hr></hr>
        </div>
    );
    
}
  
export default Background_Section;