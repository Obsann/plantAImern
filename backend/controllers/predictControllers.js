import History from "../models/historyModel.js";

// Fake AI prediction for testing
const diseases = [
  { name: "Tomato Blight", advice: "Use fungicide spray." },
  { name: "Potato Early Blight", advice: "Remove infected leaves." },
  { name: "Corn Leaf Spot", advice: "Apply copper-based spray." }
];

export const predictDisease = async (req, res) => {
  try {
    const random = diseases[Math.floor(Math.random() * diseases.length)];

    const newHistory = await History.create({
      imageUrl: req.file.path,
      disease: random.name,
      advice: random.advice
    });

    res.json(newHistory);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getHistory = async (req, res) => {
  const history = await History.find().sort({ date: -1 });
  res.json(history);
};
