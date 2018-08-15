const express = require('express')
const app = express()
const Movies = require('./movies')

app.get('/rest/movies', (req, res) => res.send(Movies))

app.listen(3001, () => console.log('Example app listening on port 3001!'))