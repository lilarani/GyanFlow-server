import Course from "./../models/coursesMode.js";

let addCourse = async (req, res) => {
  try {
    let {
      title,
      shortDescription,
      description,
      instructors,
      category,
      totalDuration,
      enrollCount,
      seatLeft,
      batch,
      price,
      review,
      thumbnail,
      studyPlan,
      totalLectures,
      rating,
      status,
    } = req.body;
    // console.log(req.body);
    // console.log('info comming');
    let newCourse = new Course({
      title,
      shortDescription,
      description,
      instructors,
      category,
      totalDuration,
      enrollCount,
      seatLeft,
      batch,
      price,
      review,
      thumbnail,
      studyPlan,
      totalLectures,
      rating,
      status,
    });

    await newCourse.save();
    console.log("course Add Done");
    res.status(200).send({
      success: true,
      data: req.body,
    });
  } catch (e) {
    res.status(404).send({
      success: false,
      message: e.message,
    });
  }
};

let getAllPost = async (req, res) => {
  try {
    let result = await Course.find({});
    // console.log(result);
    res.status(200).send({
      success: true,
      data: result,
    });
  } catch (e) {
    res.status(404).send({
      success: false,
      data: "no data found",
    });
  }
};

const courseForInstructor = async (req, res) => {
  try {
    let instructorId = req.params.id;
    let result = await Course.find({ instructors: instructorId });

    if (!result.length) {
      return res
        .status(404)
        .json({ message: "No courses found for this instructor." });
    }

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// delete course
const deleteCourse = async (req, res) => {
  try {
    let courseId = req.params.id;
    let deletedCourse = await Course.findByIdAndDelete(courseId);

    if (!deletedCourse) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.status(200).json({
      message: "Course deleted successfully",
      course: deletedCourse,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Features course get api
const featuresCourse = async (req, res) => {
  try {
    const upcomingCourse = await Course.find({ status: "Upcoming" });
    res.status(200).send({
      success: true,
      data: upcomingCourse,
    });
  } catch (err) {
    res.status(404).send({ success: false, message: err.message });
  }
};

// Get course details by ID
const featuresCourseDetails = async (req, res) => {
  try {
    const courseDetails = req.params.id;
    const course = await Course.findById(courseDetails);
    res.status(200).send({ success: true, data: course });
  } catch (err) {
    res.status(404).send({ success: false, message: err.message });
  }
};

export {
  addCourse,
  getAllPost,
  courseForInstructor,
  deleteCourse,
  featuresCourse,
  featuresCourseDetails,
};
