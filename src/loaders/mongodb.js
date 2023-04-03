const mongoose = require('mongoose');

async function startDB() {
    await mongoose.connect('mongodb+srv://marceloluap:123321@cluster0.kjkswvj.mongodb.net/test');
};

module.exports = startDB;