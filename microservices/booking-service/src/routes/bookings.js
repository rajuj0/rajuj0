const express = require('express');
const { pool } = require('../db/postgres');
const { publishBookingEvent } = require('../events/bookingPublisher');

const router = express.Router();

router.get('/', async (req, res) => {
  const { rows } = await pool.query('SELECT id, patient_id, scheduled_for FROM bookings ORDER BY created_at DESC LIMIT 20');
  res.json(rows);
});

router.post('/', async (req, res, next) => {
  try {
    const { patientId, scheduledFor } = req.body;
    const { rows } = await pool.query(
      'INSERT INTO bookings(patient_id, scheduled_for) VALUES($1,$2) RETURNING *',
      [patientId, scheduledFor]
    );
    await publishBookingEvent(rows[0]);
    res.status(201).json(rows[0]);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
