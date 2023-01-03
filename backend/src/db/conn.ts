import { MongoClient, MongoServerError, ServerApiVersion, Db } from 'mongodb';
import 'dotenv/config';

const dbName: string = process.env.DB_NAME!;
const uri: string = process.env.URI_MONGO!;

console.log(dbName, uri);

export async function conn() {
  try {
    const client = new MongoClient(uri, { serverApi: ServerApiVersion.v1 });

    const conn: MongoClient = await client.connect();
    console.log('Connected successfully to server');

    const dbConn: Db = conn.db(dbName);

    return dbConn;
  } catch (error) {
    if(error instanceof MongoServerError) {
      console.log(error);

      throw error;
    }

    throw error;
  }
}