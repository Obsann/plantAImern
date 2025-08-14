import express from "express";
import multer from "multer";
import { predictDisease, getHistory } from "../controllers/predictControllers.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/predict", upload.single("image"), predictDisease);
router.get("/history", getHistory);

export default router;
