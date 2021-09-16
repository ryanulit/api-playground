import bodyParser from 'body-parser'
import express from 'express'

const app = express()
const port = 3000

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send({ status: 'running' })
})

app.listen(port, () => {
    console.log(`Express app listening on port ${port}`)
})