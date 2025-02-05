
exports.register = (req, res, next) => {

    try {

//code
//Step 1 req.body
console.log(req.body);
//Step 2 validate
//Step 3 Check already
//Step 4 Encrypt bcrypt
//Step 5 Insert to DB
//Step 6 Response

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


