import express from 'express';
import Sensor from './mongo.js';

const router = express.Router();

router.get('/', async (req,res)=>{
    try{
        const data = await Sensor.find();
        res.status(200).json(data);
    }catch(err){
        res.status(401).json({message:err.message});
    }
});

router.post('/', async(req,res)=>{
    const newItem = new Sensor(req.body);    
    try{
        const savedItem = await newItem.save(newItem);
        res.status(200).json(savedItem);
    }catch(err){
        res.status(401).json({message:err.message});
    }
});

router.put('/',async (req,res) => {
    try{
        const {id,aq,li,sl} = req.body;
        await Sensor.findByIdAndUpdate(id,{air_quality:aq,light_intensity:li,sound_levels:sl});
        res.status(200).json({message:'Updated Successfully'});
    }catch(err){
        res.status(401).json({message:err.message});
    }
});

router.delete('/:id',async (req,res)=>{
    try{
        await Sensor.findByIdAndDelete(req.params.id);
        res.status(200).json({message:'Item Deleted'});
    }catch(err){
        res.status(401).json({message:err.message});
    }
});

export default router;