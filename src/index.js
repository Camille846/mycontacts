const express = require('express'); 

const app = express();

app.get('/', (request, response) => {
    response.send('hello world!')
})
app.listen(3000, () => console.log('Server starting at http://localhost:3000/ '));


