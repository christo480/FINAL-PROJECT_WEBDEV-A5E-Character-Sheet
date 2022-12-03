import React from 'react'
import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = "mongodb+srv://GameMaster:Jackoval@webdev.4wt0u2s.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
await client.connect()

async function  get_heritage(heritage_query)
{
  const { db, collection } = req.params;
  const result = await client.db(db).collection(collection).findOne({});
  //fetch call that pulls heritage data from mongoDB
  //should set react state webhook to update features dynamically
}
function Header(props) {
    return (
      <div className="sheet_App">
        <form onSubmit={thing(props.heritage)}>
        <label for="heritage">Heritage:</label>
        <input type="text" id="heritage" name="heritage"></input>
        <input type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
  
  export default Header;