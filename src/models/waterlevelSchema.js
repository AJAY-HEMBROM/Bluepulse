import mongoose from "mongoose";

const WaterLevelSchema = new mongoose.Schema({
  timestamp: {
    type: Date,
    default: () => new Date()
  },
  level: {
    type: Number,
    required: true
  }
});

export const WaterLevel = mongoose.models.WaterLevel || mongoose.model("WaterLevel", WaterLevelSchema);