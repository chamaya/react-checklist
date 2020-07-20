import mysql from 'mysql';

class MySqlConnection{
    
    constructor(query, callback){
        this.connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'password',
            database: 'test',
        })
        if(query && callback){
            this.quickQuery(query, callback)
        }
    }

    quickQuery(query, callback){
        this.initConnection();
        this.initQuery(query, callback);
        this.endConnection();
    }

    initConnection(){
        this.connection.connect();
        return this.connection;
    }

    initQuery(query, callback){
        this.connection.query(query, callback);
    }

    endConnection(){
        this.connection.end()
    }
}

export default MySqlConnection;