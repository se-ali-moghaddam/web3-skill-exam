import mongoose from 'mongoose';

const metadataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: [true, "This field is required !"]
    },
    image: {
        type: String,
        default: "https://static.vecteezy.com/system/resources/thumbnails/007/746/382/small/drag-and-drop-add-document-file-button-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg"
    }
}, {
    timestamps: true
});

export default mongoose.model("Metadata", metadataSchema);