const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.USER_SERVICE_DATABASE_URL || process.env.DATABASE_URL,
  max: 5
});

module.exports = { pool };
