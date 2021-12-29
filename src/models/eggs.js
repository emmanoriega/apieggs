import { Schema, model } from "mongoose";

const eggsSchema = new Schema({
    wallet: {
        type: String,
        required: true,
        trim: true
    },
    idegg: {
        type: String,
        required: true,
        trim: true
    }
},{
    versionKey: false,
    timestamps: true
});

export default model('Eggs', eggsSchema)