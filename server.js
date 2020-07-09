const express = require('express');

const app = express();

app.get('/api/customers', (req, res)=>{
    console.log("accessing customers api");
    const customers = [
        {id: 1, firstName: 'John', lastName: "Martinez"},
        {id: 2, firstName: 'Charla', lastName: "Shine"},
        {id: 3, firstName: 'Steven', lastName: "Lee"},
    ]
    res.json(customers);
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));