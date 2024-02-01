const mongoose= require('mongoose')
const subtaskSchema = new mongoose.Schema({
    name: { type: String, required: true },
    duration: { type: Number}, 
    sessions:[{
        startTime:{type: Date} ,
        endTime:{type: Date},
    }],
    link: { type: String },
    image: { type: String },
    parent: { type: mongoose.Schema.Types.ObjectId, ref: 'Task' },
    tags: [{ type: String }],
    status:{type:Boolean},
    scheduledTime:{type:Date},
    project:{type:String}


});

const Subtask =  mongoose.model('Subtask',subtaskSchema);
module.exports = Subtask;
