import Announcement from "../models/AnnouncementModel.js";

let addAnnouncement = async (req, res) => {
  try {
    let { title, description, type, date, link, thumbnail } = req.body;
    console.log(req.body);

    let newAnnouncement = new Announcement({
      title,
      description,
      category: type,
      date,
      link,
      type,
      thumbnail,
    });

    await newAnnouncement.save();
    console.log("Announcement Add Done");
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

let getAllAnnouncement = async (req, res) => {
  try {
    let result = await Announcement.find({});
    res.status(200).send({
      success: true,
      data: result,
    });
  } catch (e) {
    res.status(404).send({
      success: false,
      data: "no announcement found",
    });
  }
};

export { addAnnouncement, getAllAnnouncement };
