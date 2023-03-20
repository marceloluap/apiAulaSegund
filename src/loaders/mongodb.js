const mongoose = require('mongoose');

async function startDB() {
    await mongoose.connect('mongodb+srv://marceloluap:marceloluap@cluster0.kz0vybw.mongodb.net/test');
};

module.exports = startDB;