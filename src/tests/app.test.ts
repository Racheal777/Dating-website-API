import  request from 'supertest'
import {createApp} from '../app'
import { describe } from 'node:test'

describe('GET / ', () => {
    it('responds with "Welcome"', async () => {
        const response = await request(createApp()).get('/')
        expect(response.status).toBe(200)
        expect(response.text).toBe('Welcome')
    })
} )