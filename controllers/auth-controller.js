const { json } = require("express");

exports.register = (req, res, next) => {

    try {
        res.json({ message: "hello register" })
    } catch (error) {
        next(error)
    }


}


exports.login = (req, res, next) => {

    try {
        console.log(dfgdfg);


        res.json({ message: "hello Login" })

    } catch (error) {
        next(error)


    }

}


