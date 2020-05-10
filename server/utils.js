
module.exports = {
    checkFormatFile : function (value) {
        return value.contains('.docx') || value.contains('.pdf');
    }
}