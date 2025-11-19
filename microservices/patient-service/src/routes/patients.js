const express = require('express');
const { pool } = require('../db/postgres');
const { cache } = require('../db/cache');

const router = express.Router();

router.get('/', async (req, res) => {
  const cached = await cache.get('patients:all');
  if (cached) {
    return res.json({ source: 'cache', data: JSON.parse(cached) });
  }
  const { rows } = await pool.query('SELECT id, name, date_of_birth FROM patients LIMIT 20');
  await cache.set('patients:all', JSON.stringify(rows), { EX: 30 });
  return res.json({ source: 'db', data: rows });
});

router.post('/', async (req, res) => {
  const { name, dateOfBirth } = req.body;
  const { rows } = await pool.query(
    'INSERT INTO patients(name, date_of_birth) VALUES($1,$2) RETURNING *',
    [name, dateOfBirth]
  );
  await cache.del('patients:all');
  res.status(201).json(rows[0]);
});

module.exports = router;
