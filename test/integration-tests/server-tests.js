var request  = require( 'supertest'), app = require('../../server/server')
var persistence  =  require ('../../server/persistence')
describe("Integration tests : ", ()=>{

  
        it("insert data",(done)=>{
            request(app).post("/insert-data","{keyData: simpleKey, data : simpleData.xls}").
            expect(200,done)
        })

        it("get Data using key",(done)=>{
            key =  'simple-key'
            value = 'value.xls'
            persistence.insertData(key, value , response => {
                request(app).get("/get-data","{keyData:"+key+"}").
                expect('value.xls',done)
            })
    
        
      
        })    
})