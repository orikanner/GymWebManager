const mongoose = require('mongoose');

const goal = new mongoose.Schema({
    title:{type:String,required:true, default:"Missing"},
    type:{type:String,required:true, default:"Fiteness"}, //Nutrition || Fiteness
    isCompleted:{type:Boolean,required:false,default:false},
    createdAt: { type: Date, default: Date.now },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const Prescription = mongoose.model('Goal', goal);

module.exports = Prescription;
