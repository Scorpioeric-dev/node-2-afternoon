const express = require('express')
const app = express()
const port = 3001
const messagesCtrl = require('./controllers/messages_controller')

//middleware
app.use(express.json())
app.use(express.static(__dirname + '/../public/build'))

//endpoints
app.post(`/api/messages`,messagesCtrl.create)
app.get(`/api/messages`,messagesCtrl.read)
//params,body,query backend points (id)
app.put(`/api/messages/:id`, messagesCtrl.upDate)
app.delete(`/api/messages/:id`, messagesCtrl.delete)


app.listen(port, () => {
    console.log(`Run DMC ${port}`)
})

