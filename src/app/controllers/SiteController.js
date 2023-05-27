const Course = require('../modles/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');

class SiteController {
    //GET /
    home(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('home', {
                    courses: mutipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }

    //GET /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
