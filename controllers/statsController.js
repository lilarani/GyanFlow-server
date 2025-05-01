// const { default: Course } = require("../models/coursesMode");
// import Course from './../models/coursesMode.js';
import Course from "../models/coursesMode.js";
import User from "../models/userModel.js";
import Payment from "../models/paymentModel.js";

let courseStats = async (req, res) => {
  try {
    // const result = await Payment.aggregate([
    //   {
    //     $group: {
    //       _id: null,
    //       totalSale: { $sum: "$courseId.price" },
    //     },
    //   },
    // ]);

    // const totalSale = result[0]?.totalSale || 0;
    // console.log(totalSale)

    const result = await Payment.aggregate([
      // Match documents where courseId exists
      {
        $match: {
          courseId: { $ne: null }
        }
      },
      // Lookup to join with courses collection
      {
        $lookup: {
          from: 'courses',
          localField: 'courseId',
          foreignField: '_id',
          as: 'courseDetails'
        }
      },
      // Unwind the courseDetails array
      {
        $unwind: '$courseDetails'
      },
      // Group to sum the price
      {
        $group: {
          _id: null,
          totalPrice: { $sum: '$courseDetails.price' }
        }
      },
      // Project to clean up the output
      {
        $project: {
          _id: 0,
          totalPrice: 1
        }
      }
    ]);

    let total =  result.length > 0 ? result[0].totalPrice : 0;

    const totalCourse = await Course.countDocuments();

    const totalStudents = await User.countDocuments({ role: "student" });
    const totalInstructors = await User.countDocuments({ role: "instructor" });

    res.status(200).send({
      success: true,
      data: { totalCourse, totalStudents, totalInstructors, total },
    });
  } catch (e) {
    res.status(404).send({
      success: false,
      data: "no stats found",
    });
  }
};

export { courseStats };
