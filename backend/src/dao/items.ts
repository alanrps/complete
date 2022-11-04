import { Db, Collection, InsertOneResult } from 'mongodb';
import { conn } from '../db/conn';
import { Item } from '../types/types';

export default class ItemsDAO {
    constructor() {}

    async insertItem(itemData: Item) {
        const dbConn:Db = await conn();

        const collection:Collection = dbConn.collection('items');

        const item: InsertOneResult = await collection.insertOne(itemData);
        console.log(item);

        return item.insertedId;
    }
}