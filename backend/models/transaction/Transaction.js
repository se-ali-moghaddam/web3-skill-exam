import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: [true, "This field is required !"]
    },
    amount: {
        type: String,
        required: [true, "This field is required !"]
    },
    txHash: {
        type: String,
        required: [true, "This field is required !"]
    },
    timestamp: Date,
}, {
    timestamps: true
});

export default mongoose.model("Transaction", transactionSchema);