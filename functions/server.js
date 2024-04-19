const functions = require('firebase-functions');
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

// app.use('/send-email', emailMiddleware);

app.post('/send-email', emailMiddleware, (req, res) => {
    res.status(200).send('Email sent successfully');
});

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

const startApolloServer = async () => {
    await server.start();
    server.applyMiddleware({ app });
    db.once('open', () => {
        console.log(`🌍 Now listening on localhost:${PORT}`);
        console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
};

startApolloServer();

// Export the Express app as a Cloud Function
exports.api = functions.https.onRequest(app);
