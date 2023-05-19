exports.lambdaHandler = async (event, context) => {
    return {
        statusCode: 200,
        body: "Hello from probando cosas"
    };
};

//sam local invoke -e ./apigateway/apigateway_event.json ApiGatewayFunction
//sam local start-api
