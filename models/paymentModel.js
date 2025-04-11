import mongoose from 'mongoose';

let paymentSchema = new mongoose.Schema({
  transactionId: String,
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
});

let Payment = mongoose.model('Payment', paymentSchema);

export default Payment;
