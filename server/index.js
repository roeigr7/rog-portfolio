const express = require('express');
const next = require('next');
const { ApolloServer, gql } = require('apollo-server-express');
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

//resolvers
const { skillQueries, skillMutations } = require('./graphql/resolvers');

//types
const { skillTypes } = require('./graphql/types');

//connect to db
const db = require('./database').connect();

app.prepare().then(() => {
  const server = express();

  //Construct a schema using GRAPHQL schema language
  const typeDefs = gql`
    ${skillTypes}
    type Query {
      skill(id: ID): Skill
      skills: [Skill]
    }

    type Mutation {
      createSkill(input: SkillInput): Skill
      updateSkillVotes(id: ID, input: SkillInput): Skill
    }
  `;

  //provides a resolver for each api endpoint
  const resolvers = {
    Query: {
      ...skillQueries,
    },
    Mutation: {
      ...skillMutations,
    },
  };

  const apolloServer = new ApolloServer({ typeDefs, resolvers });
  apolloServer.applyMiddleware({ app: server });

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
