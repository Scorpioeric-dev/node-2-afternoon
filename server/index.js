const express = require('express')
const app = express()
const port = 3001
const messagesCtrl = require('./controllers/messages_controller')


app.use(express.json())

app.use(express.static(__dirname + '/../public/build'))


app.post(`/api/messages`)




app.get(`/api/messages`)



app.put(`/api/messages/:id`, messagesCtrl.upDate)


app.delete(`api/messages/:id`, messagesCtrl.Delete)


app.listen(port, () => {
    console.log (`Run DMC $[port]`)
})

