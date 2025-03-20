
let verifyTecher = (req, res, next) => {
    let user = req.user
    console.log("my techer = ", user);

    if (user?.role !== 'Teacher') {
        return res.status(404).send({
            success: false,
            message: " Only teacher access this data "
        });
    }

    next()
}

export default verifyTecher




