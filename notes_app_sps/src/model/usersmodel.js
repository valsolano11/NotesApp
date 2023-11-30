import mongoose  from "mongoose";

const usersSchema = new mongoose.Schema({
    nombre :{
        type: String,
        required: true,
        trim: true
    }
},{
    timestamps: true
});

export default mongoose.model("users", usersSchema);