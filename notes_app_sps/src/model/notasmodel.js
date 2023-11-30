import mongoose  from "mongoose";

const notasSchema = new mongoose.Schema({
    nombre :{
        type: String,
        required: true,
        trim: true
    },
    content:{
        type: String,
        required: true,
        trim: true
    },
    date:{
        type: Date,
        require: true 
    }
},{
    timestamps: true
});

export default mongoose.model("notas", notasSchema);