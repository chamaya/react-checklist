import express from 'express';
import ConnectionObj from "./ConnectionObj.js";
const app = express();

app.get('/api/customers', (req, res)=>{
    console.log("accessing customers api");
    getCustomerRows(res);
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

app.listen(port, () => console.log(`Server started on port ${port}`));