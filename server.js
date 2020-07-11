import express from 'express';
import bodyParser from 'body-parser';
import ConnectionObj from "./ConnectionObj.js";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  }); 

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

        console.log('The solution is: ', rows)
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

        console.log('The solution is: ', rows[0]);
        res.send({id: rows.insertId, firstName, lastName, email, agent});
    })

    connection.end()
}

app.listen(port, () => console.log(`Server started on port ${port}`));