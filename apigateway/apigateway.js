const db = require("/opt/nodejs/db");

exports.lambdaHandler = async (event, context) => {
    return {
        statusCode: 200,
        body: {
            message: db.greeting("ApiGateWay")
        }
    };
};

//sam local invoke -e ./apigateway/apigateway_event.json ApiGatewayFunction
//sam local start-api
