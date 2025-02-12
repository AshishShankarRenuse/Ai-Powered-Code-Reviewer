const aiService = require('../services/ai.service');

module.exports.getReview = async (req, res) => {

    const code = req.body.code; //code is the prompt & request body is an object with key code

    if(!code) {
        return res.status(400).send('Prompt is required');
    }

    const response = await aiService(code);

    res.send(response);
};