import mongoose from 'mongoose';

const dbSchema = new mongoose.Schema({
        nodeId: {type: Number, required: true},
        air_quality: {type: String, required: true},
        light_intensity: {type: String, required: true},
        sound_levels: {type: String, required: true}
    }
);

const Sensor = mongoose.model('Sensor',dbSchema);

export default Sensor;