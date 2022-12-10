console.clear();

import express from 'express';
import { MongoClient, ServerApiVersion } from 'mongodb';
import cors from 'cors'


const PORT = 3200;

const server = express();
server.use(cors())
const uri = "mongodb+srv://GameMaster:Jackoval@webdev.4wt0u2s.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
await client.connect();

server.get('/connection', async (req, res) => {
  const ping = await client.db('admin').command({ ping: 1 })
  const dbs = await client.db().admin().listDatabases();
  res.end(JSON.stringify({
    ping,
    dbs
  }));
})

server.get('/db/findOne/:db/:collection', async (req, res) => {
  const { db, collection } = req.params;
  const result = await client.db(db).collection(collection).findOne({});
  res.send(result);
});
server.get('/db/findOne/:db/:collection/:query', async (req, res) => {
  const { db, collection,query } = req.params;
  const result = await client.db(db).collection(collection).findOne({Name:query});
  res.send(result);
});

server.get('/', (req, res) => {
  res.send('<h1>Include this in your screenshot for Step 2 of your lab report!</h1>')
})

server.listen(PORT, () => {
  console.log(`Server Listening On Port:${PORT}`);
})