import express from "express";
import {
  ApolloServer,
  gql
} from "apollo-server-express";
import typeDefs from "./schema";
import resolvers from "./resolvers";
import db from "./models";

const server = new ApolloServer({
  typeDefs: gql(typeDefs),
  resolvers,
  context: {
    db
  }
});

const app = express();
server.applyMiddleware({
  app
});

app.use(express.static("src/client/build"));

db.sequelize.sync().then(() => {
  // populate player table with def players
  db.Player.upsert({
    id: 1,
    name: 'Player 1'
  });
  db.Player.upsert({
    id: 2,
    name: 'Player 2'
  });

  // populate moves table with def moves
  // TODO: Improve this 
  db.MoveType.upsert({
    id: 1,
    name: 'Rock',
  }).then(() => {
    return db.MoveType.upsert({
      id: 2,
      name: 'Paper',
      killsId: 1
    }).then(() => {
      db.MoveType.upsert({
        id: 3,
        name: 'Scissors',
        killsId: 2
      }).then(() => db.MoveType.update({
        killsId: 3
      }, {
        where: {
          name: 'Rock'
        }
      }).then(() => {

        // Create default config
        db.Configuration.upsert({
          id: 1,
          name: 'Default',
        }).then(() => {
          return db.Configuration.findByPk(1).then(
            (config) => {
              config.setMoveTypes([1,2,3])
            }
          )
        });

      }))
    });
  });

  


  app.listen({
      port: 4000
    }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
});