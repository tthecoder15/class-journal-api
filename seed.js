import mongoose from "mongoose"
import { Entry, Category } from "./db.js"

const categories = [
    { name: "Food" },
    { name: "Gaming" },
    { name: "Coding" },
    { name: "Others" }
]


await Category.deleteMany()
console.log('Deleted Categories')
let retCats = await Category.insertMany(categories)
console.log(retCats)
console.log('Added Categories')

const entries = [
    { category: retCats[0]._id, content: 'Pizza is yummy!' },
    { category: retCats[2]._id, content: 'Coding is fun!' },
    { category: retCats[1]._id, content: 'War. War never changes.' },
]

await Entry.deleteMany()
console.log('Deleted Entries')
await Entry.insertMany(entries)
console.log('Added Entries')

mongoose.disconnect()
console.log('Disconnected from db')