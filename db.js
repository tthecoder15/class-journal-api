import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()

try {
    const m = await mongoose.connect(process.env.DB_URI)
    console.log(m.connection.readyState == 1 ? "Mongoose connected" : "Mongoose connection error")
}

catch (err) {
    console.err(err)
}


    

const entrySchema = {
        category: {type: mongoose.Types.ObjectId, ref: 'Category', required: true},
        content: {type: String, required: true}
    }

const Entry = mongoose.model("Entry", entrySchema)

const Category = mongoose.model('Category', {
    name: { type: String, required: true },
})

export { Entry, Category }