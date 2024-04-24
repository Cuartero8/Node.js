import { log } from "node:console";
import { createServer } from "node:http";

const server = createServer( (req, res) => {

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");

    const jsonResponse = JSON.stringify({
        "id": 195,
        "name": "Kristen Stewart",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Female",
        "origin": {
            "name": "Earth (C-500A)",
            "url": "https://rickandmortyapi.com/api/location/23"
        },
        "location": {
            "name": "Earth (C-500A)",
            "url": "https://rickandmortyapi.com/api/location/23"
        },
        "image": "https://rickandmortyapi.com/api/character/avatar/195.jpeg",
        "episode": ["https://rickandmortyapi.com/api/episode/8"],
        "url": "https://rickandmortyapi.com/api/character/195",
        "created": "2017-12-30T12:19:16.042Z"
        })
    res.end(jsonResponse)
})

server.listen(3000, () => {
    console.log("Server running at localhost:3000");
})
