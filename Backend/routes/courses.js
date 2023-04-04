const express = require("express")
const route = express.Router()
const courses = require("../modules/Courses")

route.post("/addcourses", async (req, res) => {

    try {


        const saveCourse = courses({
            name: req.body.name,
            image_url: req.body.image_url,
            enrollment: req.body.enrollment,
            free: req.body.free,

        });
        console.log("Add Data")
        await saveCourse
            .save()
            .then((res) => {
                console.log("Course Added");
            })
            .catch((err) => {
                console.log(err, "error has occur");
            });
        res.send(saveCourse)
    } catch (err) {
        console.log(err)
        res.status(500).send({ error: "Internal Server Error" })
    }

});

route.get('/fetchcourses', async (req, res) => {
    const allData = await courses.find()
    console.log("data fetched")
    res.json(allData)
})

module.exports = route