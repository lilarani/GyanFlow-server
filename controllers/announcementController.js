let addAnnouncement = async (req, res) => {
  try {
    let { title, description, category, date, link } = req.body;
  } catch (e) {
    res.status(404).send({
      success: false,
      message: e.message,
    });
  }
};
