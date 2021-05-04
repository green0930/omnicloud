import url from "url";
import { MongoClient } from "mongodb";

let cachedDb = null;

const uri = `mongodb+srv://OmniAdmin:KenzieAcademy@omnicloud.bvcrh.mongodb.net/omnicloud?retryWrites=true&w=majority`;

export default async function connectToDB() {
  if (cachedDb) {
    return cachedDb;
  }

  const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  const db = await client.db(url.parse(uri).pathname.substr(1));

  cachedDb = db;
  return db;
}
