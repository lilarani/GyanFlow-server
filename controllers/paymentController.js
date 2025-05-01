import Payment from "../models/paymentModel.js";

const getAllPayment = async (req, res) => {
  try {
    let result = await Payment.find({})
      .populate("studentId")
      .populate("courseId");

      console.log(result);
    res.status(200).send({
      success: true,
      data: result,
    });
  } catch (e) {
    console.log(e.message)
    res.status(404).send({
      message: e.message,
      success: false,
      data: "No payment found",
    });
  }
};

export { getAllPayment };
