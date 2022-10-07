import { ApolloServer, gql } from 'apollo-server';
import { conn } from './db/conn';
import UsersDAO from './db/users';
import { Db } from 'mongodb';
import { User } from './types';

const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;

const resolvers = {
  Query: {
    books: () => books,
  },
  Book: {
    title: () => books[0].title, 
    author: () => books[0].author
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
});

server.listen().then((({port}) => {
  console.log(`Rodando na porta: ${port}`);
}));