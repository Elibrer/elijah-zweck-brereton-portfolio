const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { ApolloServer } = require('apollo-server-express');
const { sendEmail, emailMiddleware } = require('./routes/index');




const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/send-email', emailMiddleware);


// API endpoint to handle form submissions

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.post('/send-email', emailMiddleware, (req, res) => {
  res.status(200).send('Email sent successfully');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app });

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`🌍 Now listening on localhost:${PORT}`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
};

startApolloServer();
