const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const createDeepSeekAPI = (apiKey) => {
    const app = express();
    app.use(bodyParser.json());

    const DEEPSEEK_API_URL = 'https://api.deepseek.com/v1';

    app.post('/api/deepseek', async (req, res) => {
        try {
            const response = await axios.post(`${DEEPSEEK_API_URL}/query`, req.body, {
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json'
                }
            });
            res.json(response.data);
        } catch (error) {
            res.status(error.response.status).json({ error: error.message });
        }
    });

    return app;
};

module.exports = createDeepSeekAPI;


