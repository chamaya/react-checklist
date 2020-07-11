import express from 'express';
import bodyParser from 'body-parser';
import ConnectionObj from "./ConnectionObj.js";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
  })); 

app.get('/api/customers', (req, res)=>{
    console.log("accessing customers api");
    getCustomerRows(res);
});
app.post('/api/customer/', (req, res)=>{
    console.log("adding customer");
    console.log("REQUEST BODY: ", req);
    const {firstName, lastName, email, agent} = req.body;
    insertCustomer(firstName, lastName, email, agent, res);
});

const port = 5000;

function getCustomerRows(res){

    let connection = new ConnectionObj().getConnection();
    connection.connect()

    connection.query('SELECT * FROM Customers', function (err, rows, fields) {
        if (err) throw err

        console.log('The solution is: ', rows[0])
        res.send(rows);
    })

    connection.end()
}

function insertCustomer(firstName, lastName, email, agent, res){

    let connection = new ConnectionObj().getConnection();
    connection.connect()

    connection.query(`INSERT INTO Customers (firstname, lastname, email, agent) 
    VALUES ("${firstName}", "${lastName}", "${email}", ${agent});`, function (err, rows, fields) {
        if (err) throw err

        console.log('The solution is: ', rows[0])
        res.send({firstName, lastName, email, agent, id: rows.insertId});
    })

    connection.end()
}

app.listen(port, () => console.log(`Server started on port ${port}`));