let verifyModerator = () => {
    let user = req.user

    if (user?.role !== 'Moderator') {
        return res.status(404).send({
            success: false,
            message: "Only Moderator access this data "
        });
    }
    next()
}

export default verifyModerator