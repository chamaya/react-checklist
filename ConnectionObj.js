import mysql from 'mysql';

class ConnectionObj{
    
    constructor(){
        this.connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'password',
            database: 'test',
        })
    }

    getConnection(){
        return this.connection;
    }
}

export default ConnectionObj;