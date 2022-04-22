// build your server here and require it from index.js
const server = require('./api/server.js');

const PORT = process.env.PORT || 9000;

server.listen(PORT, () => {
    console.log(`Revved up on port: ${PORT}`);
});

