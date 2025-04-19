import mongoose from 'mongoose';

const chatBotSchema = new mongoose.Schema({
  question: String,
  response: String,
  date: Date.new(),
});

const Message = mongoose.model('Message', chatBotSchema);

export default Message;
