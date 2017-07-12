var mysql = require('mysql');

var connectionConfig = mysql.createConnection({
    host: 'localhost',
    port: '3307',
    user: 'root',
    password: 'root'
});

exports.connect = function () {
    var con = connectionConfig.connect(function (error) {
        if (error) throw error;
        var ret = "Connected!";
        console.log(ret);
        return ret;
    });
    return con;
};

exports.close = function(){
    connectionConfig.end(function(error){
        console.log('Connection close.');
    });
};