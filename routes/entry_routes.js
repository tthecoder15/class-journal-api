import { Router } from "express"
import { Entry } from "../db.js"

const router = Router()

// Get list of entries
router.get('/entries', async (req, res) => {
    res.send(await Entry.find())
})

// Get single entry
router.get('/entries/:id', async (req, res) => {
    try {
        const entry = await Entry.findById(
            req.params.id
        ).populate('category')
        if (entry) {
            res.send(entry)
        } else {
            res.status(404).send({error: "Entry not found"})
        }
    }
    catch (err) {
        res.status(400).send(err)
    }

    
})

// Create a new entry
router.post('/entries', async (req, res) => {
    try {
        // Get the body of the request
        // console.log(req.body)
        // Validate the input
        // Create a new entry object
        // Add it to the array/db
        const newEntry = await Entry.create(req.body)
        // Respond to the client with the new entry
        res.status(201).send(newEntry)}
    catch (err) {
        res.status(400).send(err)
    }
})

// Update an entry
router.put('/entries/:id', async (req, res) => {
    try {
        const entry = await Entry.findByIdAndUpdate(
            req.params.id, req.body, {returnDocument: 'after'}
        )
        if (entry) {
            res.send(entry)
        } else {
            res.status(404).send({error: "Entry not found"})
        }
    }
    catch (err) {
        res.status(400).send({Error: err.message})
    }    
})

// Delete an entry
router.delete('/entries/:id', async (req, res) => {
    try {
        const entry = await Entry.findByIdAndDelete(
            req.params.id, req.body, {returnDocument: 'after'}
        )
        if (entry) {
            res.status(200).send({Success: "Entry deleted"})
        } else {
            res.status(404).send({error: "Entry not found"})
        }
    }
    catch (err) {
        res.status(400).send({ error: err.message })
    }    
})

export default router