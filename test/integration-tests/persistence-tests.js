
var assert = require('assert')
var persistence  =  require('../../server/persistence')



describe('Persistance tests  : ',()=>{

    it('insert data than select it using key',()=>{
        key =  'simple-key'
        value = 'value.xls'
        persistence.insertData(key, value , () => {
              persistence.getData(key, response =>{
                assert.equal('value.xls', response)
            }) 
        })
    })

    it('insert data than select all data',()=>{
        key =  'simple-key'
        value = 'value.xls'
        persistence.insertData(key, value , () => {
            persistence.getAllDatas(response =>{
                assert.equal('value.xls', response[0])
            }) 
        })
    })

    it('insert data than delete it',()=>{
        key =  'simple-key'
        value = 'value.xls'
        persistence.insertData(key, value , () => {
            persistence.deleteData(key, response =>{
                assert.equal('data has been deleted', response)
            }) 
        })
    })





})