const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const quizRoutes = require("./routes/quiz");
const leaderboardRoutes = require("./routes/leaderboard");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5500;

app.use(cors());
app.use(express.json());

app.use("/quiz", quizRoutes);
app.use("/leaderboard", leaderboardRoutes);

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("Error connecting to MongoDB:", err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
