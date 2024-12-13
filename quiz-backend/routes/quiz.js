const express = require("express");
const router = express.Router();
const Score = require("../models/Score"); // Assuming your score model is here

// Route to save user score
router.post("/score", async (req, res) => {
  const { name, score } = req.body;

  try {
    const newScore = new Score({ name, score });
    await newScore.save();
    res.status(200).send("Score submitted successfully");
  } catch (error) {
    console.error("Error submitting score:", error);
    res.status(500).send("Error submitting score");
  }
});

// Route to get leaderboard (all scores)
router.get("/leaderboard", async (req, res) => {
  try {
    const leaderboard = await Score.find().sort({ score: -1 }); // Sort scores in descending order
    res.status(200).json(leaderboard);
  } catch (error) {
    console.error("Error fetching leaderboard:", error);
    res.status(500).send("Error fetching leaderboard");
  }
});

module.exports = router;
