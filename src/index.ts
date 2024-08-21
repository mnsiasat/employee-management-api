import express from 'express'
import 'reflect-metadata'
import { ApolloServer } from 'apollo-server-express'
import { buildSchema } from 'type-graphql'

import connectDB from './config/ormconfig'
import { EmployeeResolver } from './resolvers/EmployeeResolver'

async function main() {
  connectDB
  const app = express() as any
  const schema = await buildSchema({ resolvers: [EmployeeResolver] })
  const server = new ApolloServer({
    schema,
    introspection: true,
  })
  await server.start()
  server.applyMiddleware({ app })
  app.listen(4000, () =>
    console.log(
      `Server is running on http://localhost:4000${server.graphqlPath}`,
    ),
  )
}

main()
