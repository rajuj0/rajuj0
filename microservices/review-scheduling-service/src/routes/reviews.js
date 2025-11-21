const express = require('express');
const { pool } = require('../db/postgres');

const router = express.Router();

router.get('/', async (req, res) => {
  const { rows } = await pool.query('SELECT id, patient_id, scheduled_for FROM review_schedules ORDER BY scheduled_for DESC LIMIT 20');
  res.json(rows);
});

router.post('/', async (req, res) => {
  const { patientId, scheduledFor } = req.body;
  const { rows } = await pool.query(
    'INSERT INTO review_schedules(patient_id, scheduled_for) VALUES($1,$2) RETURNING *',
    [patientId, scheduledFor]
  );
  res.status(201).json(rows[0]);
});

module.exports = router;
