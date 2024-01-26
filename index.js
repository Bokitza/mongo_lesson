const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
const cors = require("cors");
const uri = `mongodb+srv://sagiyoav:${process.env.MONGO_DB_PASSWORD}@testingcluster.2pbdc6p.mongodb.net/?retryWrites=true&w=majority`;

const app = express();
const port = 3000;
app.use(cors());

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

app.get("/people", async (req, res) => {
  const db = client.db("database");
  const people = db.collection("people");
  const result = await people.find({}).toArray();

  res.send(result);
});

app.listen(port, async () => {
  await client.connect();
  console.log("mongo db is now connected!");
});
