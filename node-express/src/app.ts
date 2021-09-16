import express from 'express'
import { Order } from './models/domain'

const app = express()
const port = 3000

// implement order repo
const repo = {
    get: (id: string): Order | null => null
}

app.get('/', (req, res) => {
    res.send({ status: 'running' })
})

app.get('/:id', (req, res) => {
    const orderId = req.params.id
    const order = repo.get(orderId)

    if (order) {
        res.json(order)
    } else {
        res.status(404).send(`Order #${orderId} not found`)
    }
})

app.post('/', (res, req) => {
    // implement
})

app.listen(port, () => {
    console.log(`Express app listening on port ${port}`)
})