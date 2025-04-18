import Announcement from "../models/AnnouncementModel";

let addAnnouncement = async (req, res) => {
  try {
    let { title, description, category, date, link } = req.body;
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
  } catch (e) {
    res.status(404).send({
      success: false,
      message: e.message,
    });
  }
};

export { addAnnouncement };
