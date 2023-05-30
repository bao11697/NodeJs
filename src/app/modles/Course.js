const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');
const slug = require('mongoose-slug-updater');
// const AutoIncrement = require('mongoose-sequence')(mongoose);
// const autoIncrement = require('mongoose-auto-increment');


const Schema = mongoose.Schema;

const Course = new Schema(
    {
        // _id: {type : Number},
        name: { type: String, required: true },
        description: {
            type: String,
        },
        image: { type: String, maxLength: 255 },
        slug: { type: String, slug: 'name', unique: true },
        videoId: { type: String, maxLength: 255, default: 'eHeOGEIaass' },
        level: { type: String, maxLength: 255 },
    },
    {
        // _id: false,
        timestamps: true,
    },
);
// Custom query helper
Course.query.sortable = function (req) {
    if (req.query.hasOwnProperty('_sort')) {
        const isValidtype = ['asc', 'desc'].includes(req.query.type);

        return this.sort({
            [req.query.column]: isValidtype ? req.query.type : 'desc',
        });
    }
    return this;
};

// Add Plugin
mongoose.plugin(slug);

// Course.plugin(AutoIncrement)

Course.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
});
module.exports = mongoose.model('Course', Course);
