var BDD = require('./BDD/data')

persistence = {
    
    isExistsData : function (keyData) {
        return Object.keys(BDD).indexOf(keyData) > -1 
    },

    insertData : function (keyData, data, callback) {

                    if( ! this.isExistsData(keyData) ) {
                        BDD[keyData] = data 
                        return callback('data saved successfully')
                    }
                    return callback('data already exists')
                },

    getData : function ( keyData, callback ){
                    if(this.isExistsData(keyData))
                        return BDD[keyData]
                    return callback('data dosn\'t exists')    
                },

    getAllData :function (callback){
                return callback(BDD.values)
                }
    
}


module.exports = persistence

