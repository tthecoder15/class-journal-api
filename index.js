import app from './app.js'

// Start the server
app.listen(process.env.PORT || 4001, err => {
    if (err) {
        console.error(err)
    } else {
        console.log('Server running')
    }
})

// const app = express()

// app.use(express.json())

// const messageCollection = []

// app.get('/', (req, res) => {
//     res.send("Welcome")
// })

// app.post('/repeater', (req, res) => {
//     if ("message" in req.body) {
//         res.json({Success: "Your request, three times is " + req.body.message + req.body.message + req.body.message})
//     } else {
//         res.json({Error: "Please provide a 'message' in your request body then I can copy it for you"})
//     }
// })

// app.post('/messages', (req, res) => { 
//     if ("message" in req.body) {
//     let newMessage = {message: req.body.message, id: (messageCollection.length + 1) }
//     messageCollection.push(newMessage)
//     res.json(newMessage)
//     } else {
//         res.send({Error: "Please provide a 'message'"})
//     }
// })

// app.get('/messages/:id', (req, res) => { 
//     const matchingMessages = messageCollection.filter((mes) => mes.id == req.params.id)
//     if (matchingMessages.length == 1) {    
//     res.send(matchingMessages[0])
//     } else {
//         res.json({Error: "No stored messages have the supplied ID"})
//     }
// })

// app.patch('/messages/:id', (req, res) => {
//    const inputId = req.params.id 
//    const matchingMessages = messageCollection.filter((mes) => mes.id == inputId)
//     if (matchingMessages.length == 1) {    
//     matchingMessages[0].message = req.body.message
//     res.send(matchingMessages[0])
//     } else {
//         res.json({Error: "No stored messages have the supplied ID"})
//     }
// })

// app.delete('/messages/:id', (req, res) => {
//     let match = 0
//     const inputId = req.params.id 
//     for (let i = 0; i < messageCollection.length; i++) {
//         if (messageCollection[i].id == inputId) {
//             match = 1
//             messageCollection.splice(i)
//         }
//     }
    
//     if (match = 0) {
//         res.json({Error: "No stored messages have the supplied ID"})
//     }
//     else {
//        res.json({Error: "Message successfully deleted"}) 
//     }       
// })

// app.listen(4000, err => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log('Server running')
//     }
// })