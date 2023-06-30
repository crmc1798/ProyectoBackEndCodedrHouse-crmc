const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')
const session = require("express-session");

const { dbConnet, dbSessionName } = require("./db.config");

const mongoConfig = (app) => {
    app.use(session({
        store: MongoStore.create({
            mongoUrl:dbSessionName,
            mongoOptions:{useNewUrlParser: true},
        }),
        secret: "C0ntr4",
        resave: false,
        saveUninitialized: false
    }))

    mongoose.set('strictQuery', false)
    mongoose.connect(dbConnet, error => {
    if (error) {
        logger.error(`Cannot connect to db. error ${error}`)
    }
    logger.info('db conected');
});
}

module.exports = mongoConfig;