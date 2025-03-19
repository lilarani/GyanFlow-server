const verifyAdmin = (req, res, next) => {
    let user = req.user
    // console.log("my admin = ", user);

    if (user?.role !== 'Admin') {
        return res.status(404).send({
            success: false,
            message: " Only admin access this data "
        });
    }

    next()
}


export default verifyAdmin;