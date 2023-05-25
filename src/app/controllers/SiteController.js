const Course = require('../modles/Course');
class SiteController {
    //GET /
    home(req, res) {
        Course.find({})
            .then((courses) => {
                res.json(courses);
            })
            .catch((err) => {
                res.status(400).json({ error: 'ERROR..!!!' });
            });
    }

    //GET /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
