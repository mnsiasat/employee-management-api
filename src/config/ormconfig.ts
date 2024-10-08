import { DataSource } from 'typeorm'

import dotenv from 'dotenv'
dotenv.config()

const connectDB = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URI,
  logging: false,
  synchronize: true,
  entities: ['./src/models/**/*.ts'],
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
})

connectDB
  .initialize()
  .then(() => {
    console.log(`Data Source has been initialized`)
  })
  .catch((err) => {
    console.error(`Data Source initialization error`, err)
  })

export default connectDB
