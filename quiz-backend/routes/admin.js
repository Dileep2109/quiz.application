const express = require('express');
const Score = require('../models/Score');
const router = express.Router();

// Fetch leaderboard
router.get('/leaderboard', async (req, res) => {
  try {
    const scores = await Score.find().sort({ score: -1 }).limit(10);
    res.json(scores);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
