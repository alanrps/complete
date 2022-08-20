const { graphql, buildSchema } = require('graphql');
import { conn } from './db/conn';
import UsersDAO from './db/users';
import { Db } from 'mongodb';
import { User } from './types';

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The rootValue provides a resolver function for each API endpoint
const rootValue = {
  hello: () => {
    return 'Hello world!';
  },
};

// Run the GraphQL query '{ hello }' and print out the response
graphql({
  schema,
  source: '{ hello }',
  rootValue
})
.then((response: any) => {
  console.log(response);
});