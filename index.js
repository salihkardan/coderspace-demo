
exports.coderspace = async (event, context) => {
    let buff = Buffer.from(event.body, "base64");
    let eventBodyStr = buff.toString('UTF-8');
    let eventBody = JSON.parse(eventBodyStr);
    return {
        statusCode: 200,
        body: JSON.stringify("Hello, " + eventBody.name + " :)")
    };
};