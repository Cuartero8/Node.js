const PORT = 3000;
import { createServer } from "node:http";

const server = createServer( (req, res) => {

    console.log(`Server Active`);

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end(`<html><h1>My first server, yeey!</h1></html>`);

});

server.listen(PORT, () => {
    console.log(`Server running at http:localhost://${PORT}`)
})
