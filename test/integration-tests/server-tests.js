var request  = require( 'supertest'), app = require('../../server/server')
var persistence  =  require ('../../server/persistence')


describe("Integration tests : ", ()=>{

  
        it("insert data expect ok",()=>{
            request(app).post("/insert-data","{keyData: simpleKey, data : simpleData.xls}").
            expect(200)
        })

        it("getData using key",()=>{
            key =  'simple-key'
            value = 'value.xls'
            persistence.insertData(key, value , response => {
                request(app).get("/get-data","{keyData:"+key+"}").
                expect('value.xls')
            })
        })    


        it("get all data",()=>{
            key =  'simple-key'
            value = 'value.xls'
            persistence.insertData(key, value , response => {
                request(app).get("/get-all-data").
                expect('value.xls')
            })
        }) 

      
        it("delete data using key",()=>{
            key =  'simple-key'
            value = 'value.xls'
            persistence.insertData(key, value , response => {
                request(app).get("/delete-data","{keyData:"+key+"}").
                expect('data has been deleted')
            })
        })       
   
});

app.on('exit', function(code) {
    return console.log(`About to exit with code ${code}`);
});