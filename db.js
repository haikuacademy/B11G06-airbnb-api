// db.js
import pg from 'pg'
import { DBURL } from './secrets.js'
const { Pool } = pg

// Database connection parameters
export const db = new Pool({
  ssl: {
    rejectUnauthorized: false
  },
  connectionString: DBURL

})




