const { Pool } = require('pg');

const warehousePool = new Pool({
  connectionString: process.env.ANALYTICS_DB_URL || process.env.ANALYTICS_DATABASE_URL,
  max: 5
});

module.exports = { warehousePool };
