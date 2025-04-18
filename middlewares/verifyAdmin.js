const verifyAdmin = (req, res, next) => {
  let user = req.user;

  if (user?.role !== 'admin') {
    return res.status(404).send({
      success: false,
      message: ' Only admin access this data ',
    });
  }

  next();
};

export default verifyAdmin;
