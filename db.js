// db.js
import pg from 'pg'
const { Pool } = pg

// Database connection parameters
const db = new Pool({
  ssl: {
    rejectUnauthorized: false
  },
  connectionString:
    'postgres://phangan_user:Upmwv1wdC9VdWmyaJ6NSTW56uhG8qFW1@dpg-cmsaf87109ks73dteskg-a.singapore-postgres.render.com/phangan'
})

export default db

import { DBURL } from './secrets.js'
const db = new Pool({
  ssl: {
    rejectUnauthorized: false
  },
  connectionString: DBURL
})
