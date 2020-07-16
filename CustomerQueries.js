import MySqlConnection from "./MySqlConnection.js";

function getCustomerRows(res){
    new MySqlConnection('SELECT * FROM Customers', function (err, rows, fields) {
        if (err) throw err
        console.log('The solution is: ', rows)
        res.send(rows);
    })
}

function insertCustomer(firstName, lastName, email, agent, res){
    new MySqlConnection(`INSERT INTO Customers (firstname, lastname, email, agent) 
    VALUES ("${firstName}", "${lastName}", "${email}", ${agent});`, function (err, rows, fields) {
        if (err) throw err

        console.log('The solution is: ', rows[0]);
        res.send({id: rows.insertId, firstName, lastName, email, agent});
    });
}

function deleteCustomer(id, res){
    new MySqlConnection(`DELETE FROM Customers WHERE id = ${id};`, function (err, rows, fields) {
        if (err) throw err

        console.log('The solution is: ', rows[0]);
        res.send({message:`Deleted Customer ${id}`, deletedId: id});
    });
}

export {getCustomerRows, deleteCustomer, insertCustomer};