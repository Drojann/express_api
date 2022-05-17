//objeto express
const express = require ('express')
//app express
const app = express()
app.use(express.json())
//puerto
const port = 3000

//HTTP methods
app.get('/v1/explorers', (req, res) =>{
    console.log(`Api explorers GET all requests ${new Date()}`)
    const explorer1 = {id: 1, name: "Carlo1"}
    const explorer2 = {id: 2, name: "Carlo2"}
    const explorer3 = {id: 3, name: "Carlo3"}
    const explorer4 = {id: 4, name: "Carlo4"}
    const explorers = [explorer1, explorer2, explorer3, explorer4]
    res.status(200).json(explorers)
})

//Get
app.get('/v1/explorers/:id', (req, res) =>{
    console.log(`Api explorers GET request ${new Date()}`)
    console.log(`Getting explorer with id ${req.params.id}`)
    const explorer = {id: 1, name: "Carlo"}
    res.status(200).json(explorer)
})

//POST
app.post('/v1/explorers', (req, res) =>{
    console.log(`Api explorers POST request ${new Date()}`)
    const requestBody = req.body
    res.status(201).json({message: "created"})
})

//PUT
app.put('/v1/explorers/:id', (req, res) =>{
    console.log(`Api explorers PUT request ${new Date()}`)
    console.log(`Update explorer with id ${req.params.id}`)
    const requestBody = req.body
    res.status(200).json({message: "updated"})
})

//DELETE
app.delete('/v1/explorers/:id', (req, res) =>{
    console.log(`Api explorers DELETE request ${new Date()}`)
    console.log(`Delete explorer with id ${req.params.id}`)
    const requestBody = req.body
    res.status(200).json({message: "deleted"})
})

app.listen(port, () =>{
    console.log(`Example app listening on port: ${port}`)
})