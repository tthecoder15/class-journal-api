import express from "express";
import { Category } from "./db.js"
import entryRoutes from "./routes/entry_routes.js";
import categoryRoutes from "./routes/category_routes.js"
import cors from 'cors'

const app = express()

// Middleware
// Middleware must exist after app instance and before routes
// TODO: Prod: Add origin restriction to cors call
app.use(cors())

app.use(express.json())

// Routes
app.get('/', (request, response) => {
    response.status(200)
        .json({info: "Journal API!"})
    })

app.use(categoryRoutes)
app.use(entryRoutes)

export default app