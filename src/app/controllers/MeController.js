const Course = require('../modles/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');

class MeController {
    //GET /me/stored/courses
    storedCourses(req, res, next) {
        Promise.all([Course.find(), Course.countDocumentsDeleted()])
            .then(([courses, deleteCount]) => {
                res.render('me/stored-courses', {
                    deleteCount: deleteCount,
                    courses: mutipleMongooseToObject(courses),
                });
            })
            .catch(next);

        // Course.countDocumentsDeleted()
        // .then(deleteCount => {
        //     console.log(deleteCount)
        // })
        // .catch(()=> {})

        // Course.find()
        //     .then((courses) => {
        //         res.render('me/stored-courses', {
        //             courses: mutipleMongooseToObject(courses),
        //         })
        //     })
        //     .catch(next);
    }

    //GET /me/trash/courses
    trashedCourses(req, res, next) {
        Course.findDeleted()
            .then((courses) => {
                res.render('me/trash-courses', {
                    courses: mutipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }
}

module.exports = new MeController();
