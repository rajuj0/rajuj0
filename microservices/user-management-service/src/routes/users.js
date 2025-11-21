const express = require('express');
const { pool } = require('../db/postgres');
const { cache } = require('../db/cache');

const router = express.Router();

router.get('/', async (req, res) => {
  const cached = await cache.get('users:all');
  if (cached) return res.json({ source: 'cache', data: JSON.parse(cached) });
  const { rows } = await pool.query('SELECT id, email, role FROM users LIMIT 20');
  await cache.set('users:all', JSON.stringify(rows), { EX: 30 });
  return res.json({ source: 'db', data: rows });
});

router.post('/', async (req, res) => {
  const { email, role } = req.body;
  const { rows } = await pool.query('INSERT INTO users(email, role) VALUES($1,$2) RETURNING *', [email, role]);
  await cache.del('users:all');
  res.status(201).json(rows[0]);
});

module.exports = router;
