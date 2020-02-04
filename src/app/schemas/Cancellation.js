import mongoose, { mongo } from 'mongoose';

const CancellationSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  delivery_id: {
    type: Number,
    required: true,
  },
  read: {
    type: Boolean,
    required: true,
    default: false,
  }
}, {
  timestamps: true,
});

export default mongoose.model('Cancellation', CancellationSchema);