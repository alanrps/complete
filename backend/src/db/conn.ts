import { MongoClient, MongoServerError, ServerApiVersion, Db } from 'mongodb';

// Connection URL
const uri: string = 'mongodb+srv://typescript:el9kjB9QodslHhtF@newcluster.wpvjw.mongodb.net/?retryWrites=true&w=majority';
const dbName: string = 'typescript';

export async function conn() {
  try {
    const client = new MongoClient(uri, { serverApi: ServerApiVersion.v1 });

    const conn: MongoClient = await client.connect();
    console.log('Connected successfully to server');
    const dbConn: Db = client.db(dbName);

    return dbConn;
  } catch (error) {
    if(error instanceof MongoServerError) {
      console.log(error);

      throw error;
    }

    throw error;
  }
}