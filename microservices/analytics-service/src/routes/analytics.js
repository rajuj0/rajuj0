const express = require('express');
const { warehousePool } = require('../db/analyticsDb');
const { publishAnalyticsRequest } = require('../events/analyticsPublisher');

const router = express.Router();

router.get('/reports', async (req, res) => {
  const { rows } = await warehousePool.query('SELECT generated_at, summary FROM analytics_reports ORDER BY generated_at DESC LIMIT 10');
  res.json(rows);
});

router.post('/reports', async (req, res, next) => {
  try {
    const { summary } = req.body;
    const { rows } = await warehousePool.query(
      'INSERT INTO analytics_reports(summary) VALUES($1) RETURNING *',
      [summary]
    );
    await publishAnalyticsRequest(rows[0]);
    res.status(201).json(rows[0]);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
