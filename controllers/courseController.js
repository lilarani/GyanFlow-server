import Course from './../models/coursesMode.js';

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
    console.log(req.body);
    console.log("info comming")
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
      status
    });

    await newCourse.save();
    console.log("course Add Done")
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
    res.status(200).send({
      success: true,
      data: result,
    });
  } catch (e) {
    res.status(404).send({
      success: false,
      data: 'no data found',
    });
  }
};

const courseForInstructor = async (req, res) => {
  try {
    let instructorId = req.params.id;
    let result = await Course.find({ instructors: instructorId });

    if (!result.length) {
      return res.status(404).json({ message: "No courses found for this instructor." });
    }

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export { addCourse, getAllPost, courseForInstructor };
