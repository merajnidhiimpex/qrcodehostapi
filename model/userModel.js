import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    uniqueID:{
        type: String,
        required: true,
    },
    floor:{
        type: String,
        required: true,
    },
    department:{
        type: String,
        required: true,
    },
    usarName:{
        type: String,
        required: true,
    },
    itemType:{
        type: String,
        required: true,
    },
    itemName:{
        type: String,
        required: true,
    },
    itemDetails:{
        type: String,
        required: true,
    },
    partyName:{
        type: String,
        required: true,
    },
    qty:{
        type: String,
        required: true,
    },
    itemNumber:{
        type: String,
        required: true,
    },
    purchaseDate:{
        type: String,
        required: true,
    },
    invoiceDate:{
        type: String,
        required: true,
    },
    amcDate:{
        type: String,
        required: true,
    },
    amount:{
        type: String,
        required: true,
    },
    remark:{
        type: String,
        required: true,
    },
    qty:{
        type: String,
        required: true,
    }
})

export default mongoose.model("user" , userSchema) 