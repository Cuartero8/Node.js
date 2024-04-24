const PORT = 3000;
import { createServer } from "node:http";

const server = createServer( (res, req) => {

    console.log(`Server Active`);

    req.statusCode = 200;
    req.setHeader("Content-Type", "text/html");
    req.end(`<html><h1>My first server, yeey!</h1></html>`);

});

server.listen(PORT, () => {
    console.log(`Server running at http:localhost://${PORT}`)
})
