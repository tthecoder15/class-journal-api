import request from 'supertest'
import app from './app.js'

describe('App Test', () => {
    test('GET /', async () => {
        const res = await request(app).get('/')
        expect(res.status).toBe(200)
        expect(res.headers["content-type"]).toContain('json')
        expect(res.body.info).toBeDefined()
        expect(res.body.info).toBe("Journal API!")
    })

    describe('POST /entries', () => {
        let res, postBody
        
        beforeAll(async () => {
            const cats = await request(app).get('/categories')
            postBody = {
                    content: "Hello from Jest",
                    category: cats.body[0]._id
            }
            res = await request(app).post('/entries')
                .send(postBody)
        })

        test('Successfully returns JSON content', async () => {
            expect(res.status).toBe(201)
            expect(res.headers["content-type"]).toContain('json')
        })
        
        test('Returned entry has an _id, content and category', async () => {
            expect(res.body._id).toBeDefined()
            expect(res.body.content).toBeDefined()
        })
        
        afterAll(async () => {
            const del = await request(app).delete(`/entries/${res.body._id}`)
            expect(del.status).toBe(200)
        })

    })

    describe('GET /categories', () => {
        let res
        
        beforeAll(async () => {
            res = await request(app).get('/categories')
        })
        
        test('Successfully returns JSON content', async () => {
            expect(res.status).toBe(200)
            expect(res.headers["content-type"]).toContain('json')
        })
        
        test('Returns an array with 4 elements', async () => {
            expect(res.body).toBeInstanceOf(Array)
            expect(res.body).toHaveLength(4)
        })
        
        test('First category has an _id and name', async () => {
            const cat = res.body[0]
            expect(cat._id).toBeDefined()
            expect(cat.name).toBeDefined()
        })
        
        test('Ensure list of categories contains an object with name == "Food"', async () => {
            expect(res.body).toEqual(expect.arrayContaining([expect.objectContaining(
                {
                    "name": "Food"
                }
            )]))
        })       
    })
})