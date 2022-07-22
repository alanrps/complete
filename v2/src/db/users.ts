import { Db, Collection, InsertOneResult } from 'mongodb';
import { User } from '../types';

export default class UsersDAO {
    conn: Collection;

    constructor(dbConn : Db) {
        this.conn = dbConn.collection('users');
    }

    async insertUser(userData: User){
        const user: InsertOneResult = await this.conn.insertOne(userData);
        console.log(user);

        return user.insertedId;
    }
}