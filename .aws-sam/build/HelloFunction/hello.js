const db = require("/opt/nodejs/db");

exports.lambdaHandler = async (event, context) => {
    return db.greeting("Hello Lambda");
};