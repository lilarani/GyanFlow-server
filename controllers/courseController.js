import Course from './../models/coursesMode.js';

let addCourse = async (req, res) => {
  try {
    let {
      title,
      shortDescription,
      description,
      instructors,
      categoryId,
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
    let newCourse = new Course({
      title,
      shortDescription,
      description,
      instructors,
      categoryId,
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

export { addCourse, getAllPost };
