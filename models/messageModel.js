
import {mongoose} from 'mongoose'
const messageSchema = new mongoose.Schema({
  senderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    required: true
  },
  receiverId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    required: true
  },
  content: {
    type: String,
    required: true,
    trim: true,
  },
  messageType: {
    type: String,
    enum: ['text', 'image'], 
  },
  imageUrl: {
    type: String,
    required: function() { return this.messageType === 'image'; },
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  seen: {
    type: Boolean,
    default: false, 
  },
});

const Message = mongoose.model('Message', messageSchema);
export default Message
