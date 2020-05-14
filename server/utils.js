
module.exports = {
    checkFormatFile :  (value)=> {
        return value.includes('.xls') || value.includes('.pdf');
    }
}