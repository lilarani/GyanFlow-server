import jwt from "jsonwebtoken";
import 'dotenv/config'

const getToken = (email ) => {
    return jwt.sign({ email }, process.env.SECRET, { expiresIn: '7d' })
}

export default getToken ;

