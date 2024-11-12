import express from "express";
import cors from 'cors';
import mongoose from "mongoose";
const app = express();
app.use(express.json());
app.use(cors());
// Schema and Model definition
const dbSchema = new mongoose.Schema({
    nodeId: {type: Number, required: true},
    air_quality: {type: String, required: true},
    light_intensity: {type: String, required: true},
    sound_levels: {type: String, required: true}
});

const sensor = mongoose.model('sensor', dbSchema);

mongoose.connect('mongodb://localhost:27017/mern')
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.error('Error connecting to MongoDB:', err));


app.get('/', async (req, res) => {
    try {
        const data = await sensor.find();
        res.status(200).json(data);
    } catch (err) {
        res.status(401).json({ message: err.message });
    }
});

app.post('/api', async (req, res) => {
    const newItem = new sensor(req.body);
    try {
        const savedItem = await newItem.save();
        res.status(200).json(savedItem);
    } catch (err) {
        res.status(401).json({ message: err.message });
    }
});

app.put('/', async (req, res) => {
    const { id, aq, li} = req.body;
    try {
        await sensor.findByIdAndUpdate(id, { air_quality: aq, light_intensity: li});
        res.status(200).json({ message: 'Updated Successfully' });
    } catch (err) {
        res.status(401).json({ message: err.message });
    }
});

app.delete('/:id', async (req, res) => {
    try {
        await sensor.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Item Deleted' });
    } catch (err) {
        res.status(401).json({ message: err.message });
    }
});


app.listen(5000, () => {
    console.log("Server Started Successfully");
});
