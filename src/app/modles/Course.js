const mongoose = require('mongoose');
// const slug = require('mongoose-slug-generator')
const slug = require('mongoose-slug-updater')

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, required: true },
    description: {
        type: String,
    },
    image: { type: String, maxLength: 255 },
    slug: { type: String, slug: 'name', unique: true },
    videoId:{ type: String, maxLength: 255 , default: 'eHeOGEIaass' },
    level: { type: String, maxLength: 255 }  
},{
    timestamps : true,
});

module.exports = mongoose.model('Course', Course);
