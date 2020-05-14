

var utils = require('../../server/utils')
var assert = require ('assert') 


describe('unit tests ', ()=>{

    it('set success format expect ok ', ()=>{

        assert.ok( utils.checkFormatFile('value.xls'))

    })
    
    it('set wrong format expect fail ', ()=>{

        assert.ok(! utils.checkFormatFile('value.docx') )

    })

}) 



