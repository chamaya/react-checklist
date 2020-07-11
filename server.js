import express from 'express';
import bodyParser from 'body-parser';
import {getCustomerRows, deleteCustomer, insertCustomer} from "./CustomerQueries.js";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "*")
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
app.delete('/api/customer/:id', (req, res)=>{
    const id = req.params.id;
    console.log(`deleting customer ${id}`)
    deleteCustomer(id, res);

});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));