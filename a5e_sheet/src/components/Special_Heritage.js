import Feature from "./Feature";
import '../styles/Heritage_Section.css';
import CFeature from "./CFeature";
function Special_Heritage(props) {
    //This component renders special parts of the Heritage Features that require the whole data json
    let data=props.data_func(props.Name)
    //console.log(data)
    let Features =Object.keys(data)
    
    // Gift Choices - To be sent to Feature Choices
    function get_Gifts()
    {
        let Gifts 
        if(data['Gifts'])
        {
            Gifts=data['Gifts']
            console.log(data['Gifts'])
        }
        return Gifts
    }
    function get_PGifts()
    {
        let Paragons 
        if(data['Paragon Gifts'])
        {
            Paragons=data['Paragon Gifts']
            console.log(data['Paragon Gifts'])
        }
        return Paragons
    }
    //console.log(get_Gifts())
    if(props.Name=="Dragonborn")
    {
        //Custom Rendering for Dragonborn
        return(
            <div>
              
                <Feature title={'Dragon Breath'} value={data['Dragon Breath']}></Feature>
                <hr></hr>
                <b>GIFTS</b>
                <hr></hr>
                <div>
                    {/* // Gift Rendering */}
                    <CFeature data ={get_Gifts}></CFeature>
                </div>
                <hr></hr>
            </div>
    
          );  
    }
    else
    {
        //Custom Rendering for Human race
        return(
            <div>
              {
                Features.map((val,idx)=>{
                    console.log(val)
                    if(idx>=7)
                    {
                        console.error(val)
                        let subfeatures=Object.keys(data[val])
                        subfeatures.map((val,idx)=>{
                        return(<div>
                            <Feature title={val} value={data[val]}></Feature>
                        </div>)
                        })
                    }
                    else
                    {

                    if(idx>=4)
                        return(<Feature title={val} value={data[val]}></Feature>)
                    }

                })
                
                
                }
                <hr></hr>
                <b>GIFTS</b>
                <hr></hr>
                <div>
                <CFeature data ={get_Gifts}></CFeature>
                </div>
              <hr></hr>
            </div>
    
          );  
    }
    
    
    if(data['Gifts'])
    {
        return(
        <div>
            <CFeature data ={get_Gifts}></CFeature>
        </div>
        )
    }
        return (
        <div>
          
          <hr></hr>
        </div>

      );
    }
  
export default Special_Heritage;