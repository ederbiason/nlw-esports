import express from 'express'

const app = express()

app.get('/ads', () => {
    console.log("Salve")
})

app.listen(3333)