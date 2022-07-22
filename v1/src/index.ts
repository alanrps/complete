import  express, { Request, Response } from 'express';
import { conn } from './db/conn';
import UsersDAO from './db/users';
import { Db } from 'mongodb';
import { Iuser } from './types';

const app = express();
app.use(express.json());

app.post('/users', async (request: Request, response: Response) => {
  const user: Iuser = request.body;

  try {
    if(!user) throw new Error('Dados incorretos do usuário');

    const dbConn: Db = await conn();
    const usersDAO = new UsersDAO(dbConn);
    const userId = usersDAO.insertUser(user);

    return response.status(200).send({ message: userId });
  } catch (error) {
    console.error(error);

    // if(error instanceof Error) throw error;

    return response.status(500).send(error);
  }
  
});

app.listen(3000, () => console.log('Listening 3000'));