import Announcement from "../models/AnnouncementModel.js";

let addAnnouncement = async (req, res) => {
  try {
    let { title, description, category, date, link } = req.body;
<<<<<<< HEAD
=======
    console.log(req.body);

    let newAnnouncement = new Announcement({
      title,
      description,
      category,
      date,
      link,
    });

    await newAnnouncement.save();
    console.log("Announcement Add Done");
    res.status(200).send({
      success: true,
      data: req.body,
    });
>>>>>>> 7ebca862dfe9c20b0bfd86bbc932ca1c838e759f
  } catch (e) {
    res.status(404).send({
      success: false,
      message: e.message,
    });
  }
};

export { addAnnouncement };
