const jwt = require('jsonwebtoken');
const dotenv = require("dotenv")
dotenv.config({ path: './config.env' })
const jwt_secretkey = process.env.SECRETKEY

const fetchuser = (req, res, next) => {
    const token = req.header("auth-token")
    if (!token) {
        res.status(401).send({ error: "Please authenticate using a valid token" })
    }

    try {
        const data = jwt.verify(token, jwt_secretkey)

        //|NOW THERE IS A STUPID BUG SOMETIMES DATA GIVE USER AS AN OBJECT CONTAINING USER KEY AND SOMETIME IT SIMPLY GIVE USER AS KEY
        if (data.user.user) {

            req.user = data.user.user
        } else {
            req.user = data.user
        }
        console.log("fetchuser middleware", req.user)
        console.log(data)
        next()//allow to continue to next middleware or route
    } catch (error) {
        res.status(401).send({ error: "Token Has been compramised" })
        // console.log(data)
    }
}

module.exports = fetchuser