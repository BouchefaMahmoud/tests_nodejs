var request  = require( 'supertest'), app = require('../server/server')

describe("homepage", ()=>{

    describe("Les tests d'integration", ()=>{
        it("premier test",(done)=>{
            request(app).get("/").expect(200,done)
        })
    })

})