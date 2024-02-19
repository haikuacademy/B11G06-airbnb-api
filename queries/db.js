// db.js
import pg from "pg";
const { Pool } = pg;

// Database connection parameters
const db = new Pool({
  ssl: {
    rejectUnauthorized: false,
  },
  connectionString: "postgres://username:password@host/database",
});

export default db;
