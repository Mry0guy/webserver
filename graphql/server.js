import express from "express"
import schema from './data/schema'
import { graphiqlConnect } from "apollo-server-express/dist/connectApollo";
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');
var resolver = require('graphql-mongodb-resolver')
var MongoClient = require('mongodb').MongoClient

const setupGraphQLServer = function(){
    // setup server
    const graphQLServer = express()
    const url = 'mongodb://ryanguild489:PIP-insGr8Xp@reviews-shard-00-00-quv8l.mongodb.net:27017,reviews-shard-00-01-quv8l.mongodb.net:27017,reviews-shard-00-02-quv8l.mongodb.net:27017/test?ssl=true&replicaSet=reviews-shard-0&authSource=admin'
    const schema = buildSchema(schema)

    MongoClient.connect(url, function (err, db) {
        graphQLServer.use('/graphql', graphqlHTTP({
            schema: schema,
            rootValue: resolver(schema, db),
            graphiql: true,
        }))
    }

    return (graphQLServer)
}

export default setupGraphQLServer
