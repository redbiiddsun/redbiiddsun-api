import express from 'express'
import bodyParser from 'body-parser'
import 'dotenv/config'

export const app = express()

// Config Middleware for parsing JSON request bodies
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

export default app;