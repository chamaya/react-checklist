const express = require('express');

const app = express();

app.get('/api/customers', (req, res)=>{
    console.log("accessing customers api");
    const customers = [
        {id: 1, firstName: 'John', lastName: "Martinez"},
        {id: 2, firstName: 'Charla', lastName: "Shine"},
        {id: 3, firstName: 'Steven', lastName: "Lee"},
    ]
    //res.json(customers);
    getRows(res);
});

const port = 5000;

function getRows(res){
    var mysql = require('mysql')
    var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'test',
    //insecureAuth : true
    })

    connection.connect()

    connection.query('SELECT * FROM Customers', function (err, rows, fields) {
        if (err) throw err

        console.log('The solution is: ', rows[0])
        res.send(rows);
    })

    connection.end()
}

app.listen(port, () => console.log(`Server started on port ${port}`));