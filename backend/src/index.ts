import path from 'path';
import { conn } from '../src/db/conn';
import UsersDAO from '../src/dao/users';
import ItemsDAO from '../src/dao/items';
import { Db } from 'mongodb';
import { config } from "dotenv";
import { User } from './types/types';
import express from 'express';
import { itemsDAO } from '../src/container';
import { log4js } from '../src/config/logs'; 

// Categoria do log
const logger = log4js.getLogger();

const app = express();
app.use(express.json())

app.get('/', function (req, res) {
  logger.debug("HELLO WORLD");

  res.status(200).send('Hello World');
});

app.post('/item', async (req, res) => {
  logger.debug("INSERT ITEM");

  const item = req.body;
  console.log(item);

  if(!item?.description || !item?.category)
    res.send(400).send({ message: 'Missing parameters'});

  const idItem = await itemsDAO.insertItem(item);
  
  res.status(201).send(idItem);
});

app.listen(3000);

