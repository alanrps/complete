import { Db, Collection, InsertOneResult } from 'mongodb';
import { IUser } from '../types';

class UsersDAO {
    conn: Collection;

    constructor(dbConn : Db) {
        this.conn = dbConn.collection('users');
    }

    async insertUser(userData: IUser){
        const user: InsertOneResult = await this.conn.insertOne(userData);
        console.log(user);

        return user.insertedId;
    }
}

export default UsersDAO;