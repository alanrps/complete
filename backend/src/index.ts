import path from 'path';
import { resolvers } from './resolvers';
import { ApolloServer, gql } from 'apollo-server';
import { conn } from './db/conn';
import UsersDAO from './dao/users';
import { Db } from 'mongodb';
import { config } from "dotenv"
// import { User } from './types';

config({ path: path.resolve(__dirname + '../.env') });

const typeDefs = gql`

type Item {
  id: ID!
  description: String!
  list: String!
}

type Query {
  items: [Item!]!
  item(id: ID!): Item
}

type Mutation {
  createItem(description: String!, list: String!): Item
}
`;

const server = new ApolloServer({
  typeDefs, // path.resolve(__dirname, './schemas/schema.graphql')
  resolvers,
  csrfPrevention: true,
});

server.listen().then((({port}) => {
  console.log(`Rodando na porta: ${port}`);
}));