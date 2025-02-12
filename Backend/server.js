require('dotenv').config(); //to load environment variables from a .env file into process.env
const app = require('./src/app');

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});