const express = require('express');
const cors = require('cors');
const server = express();

const names = [
    {
        "name": "kobe"
    },
    {
        "name": "kato"
    },
    {
        "name": "name3"
    }
];

const foods = [
    {
        "favorite food": "sushi",
        "age liked": "don't remember"
    },
    {
        "favorite food": "taco",
        "age liked": "8"
    },
    {
        "favorite food": "hotdog",
        "age liked": "8"
    },
    {
        "favorite food": "not hotdog",
        "age liked": "6"
    }
]



server.use(cors());

server.get('/getnames', (request, response) => {
    response.send(names);
})

server.get('/getfood', (request, response) => {
    response.send(foods);
})

server.listen(3001, () => { console.log('server loaded') });
