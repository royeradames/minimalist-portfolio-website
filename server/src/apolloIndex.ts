import {ApolloServer} from "apollo-server"
import typeDefs from "./apollo-graphql/schema"
import resolvers from "./apollo-graphql/resolvers"
import TrackDB from "./apollo-graphql/datasources/track-db"

/* knex config object */
const knexConfig = require("./knexfile")
const environment = process.env.DB_ENV || "development"



