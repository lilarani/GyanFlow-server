let verifyTecher = (req , res , next)=>{
    let user = req.user

    if (user?.role !== 'Student') {
        return res.status(404).send({
            success: false,
            message: " Only Student access this data "
        });
    }
    next()
}

export default verifyTecher ;
