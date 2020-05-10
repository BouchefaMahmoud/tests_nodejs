var BDD = require('BDD/data')


function insertData(keyData, data) {
   if( ! isExistsData(keyData) ) {
       BDD[keyData] = data 
        return 'data saved successfully'
   }

   return 'data already exists'
}   


function isExistsData(keyData) {
    return BDD.keys(obj).indexOf(keyData) > -1 
}

function getData( keyData ){
    if(isExistsData(keyData))
        return BDD[keyData]
    return 'data dosn\'t exists'    
}

function getAllData(){
    return BDD.values
}



