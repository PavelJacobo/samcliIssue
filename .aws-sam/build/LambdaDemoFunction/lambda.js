const db = require("/opt/nodejs/db");

exports.lambdaHandler = async (event, context) => {
    console.log(db.greeting("HEllo world"))
    return event.data;
};


//sam local invoke -e ./lambda/lambda_event.json LambdaDemoFunction  