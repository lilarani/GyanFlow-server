let verifyInstructor = () => {
    let user = req.user

    if (user?.role !== 'instructor') {
        return res.status(404).send({
            success: false,
            message: "Only Instructor access this data "
        });
    }
    next()
}

export default verifyInstructor