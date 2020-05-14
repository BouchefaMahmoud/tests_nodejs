var BDD = require('./BDD/data')


    
    persistence = {
    
        isExistsData :  (keyData)=> {
            return Object.keys(BDD).indexOf(keyData) > -1 
        },
        insertData :  (keyData, data, callback)=> {
    
                        if( ! persistence.isExistsData(keyData) ) {
                            BDD[keyData] = data 
                            return callback('data saved successfully')
                        }
                        return callback('data already exists')
                    },
    
        getData : ( keyData, callback )=>{
                        if(persistence.isExistsData(keyData))
                            return callback(BDD[keyData])
                        return callback('data dosn\'t exists')    
                    },
    
        getAllDatas : (callback)=>{
                    return callback(BDD.values)
                    },
        deleteData: (keyData, callback)=>{
            if(persistence.isExistsData(keyData)){
                BDD.remove(keyData)
                return callback('data has been deleted')
            }
            return callback('cannot delete data because it does\'t exists')
        }  
}


module.exports = persistence

