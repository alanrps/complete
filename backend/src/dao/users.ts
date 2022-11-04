import { Db, Collection, InsertOneResult } from 'mongodb';
import { conn } from '../db/conn';
import { User } from '../types/types';

export default class UsersDAO {
    constructor() {}

    async insertUser(userData: User){
        const dbConn : Db = await conn();
        
        const collection: Collection = dbConn.collection('users');

        const user: InsertOneResult = await collection.insertOne(userData);
        console.log(user);

        return user.insertedId;
    }
}