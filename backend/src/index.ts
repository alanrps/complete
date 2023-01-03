import path from 'path';
import { conn } from '../src/db/conn';
import UsersDAO from '../src/dao/users';
import ItemsDAO from '../src/dao/items';
import { Db } from 'mongodb';
import { config } from "dotenv";
import { User } from './types/types';
import express from 'express';
import { itemsDAO } from '../src/container';

const app = express();
app.use(express.json())

app.get('/', function (req, res) {
  res.status(200).send('Hello World');
});

app.post('/item', async (req, res) => {
  const item = req.body;
  console.log(item);

  if(!item?.description || !item?.category)
    res.send(400).send({ message: 'Missing parameters'});

  const idItem = await itemsDAO.insertItem(item);
  
  res.status(201).send(idItem);
});

app.listen(3000);

