const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, minLength: 1, maxLength: 255 },
    description: {
        type: String,
        match: /[a-z][A-Z]/,
        minLength: 1,
        maxLength: 255,
    },
    image: { type: String, maxLength: 255 },
    slug:{ type: String, maxLength: 255, unqiue : true },
    videoId:{ type: String, maxLength: 255 , default: "eHeOGEIaass" },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Course', Course);
