const createDeepSeekAPI = require('./index');
const PORT = process.env.PORT || 3000;
const apiKey = process.env.DEEPSEEK_API_KEY;

const app = createDeepSeekAPI(apiKey);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


