require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json()); // ให้ Express อ่าน JSON ได้

// เชื่อมต่อ MongoDB
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log(err));

// สร้าง Model สำหรับ Task
const TaskSchema = new mongoose.Schema({
    text: String,
    completed: Boolean
});
const Task = mongoose.model("Task", TaskSchema);

// 📌 API Routes
// ✅ GET - ดึง Task ทั้งหมด
app.get("/tasks", async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});

// ✅ POST - เพิ่ม Task ใหม่
app.post("/tasks", async (req, res) => {
    const newTask = new Task({ text: req.body.text, completed: false });
    await newTask.save();
    res.json(newTask);
});

// ✅ PUT - อัปเดต Task
app.put("/tasks/:id", async (req, res) => {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedTask);
});

// ✅ DELETE - ลบ Task
app.delete("/tasks/:id", async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
});

// เริ่มรัน Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
