const db = require('../database');

exports.getProject = (req, res) => {
    // const customerid = 77;
    const { customerid } = req.params; 
    db.query('SELECT * from project_master WHERE customer_id = ?',[customerid], (err, results) => {
        if (err) console.log(err);
        console.log(results);
        res.json(results);
    })
}


exports.getSingleProject = (req, res) => {
    const { customerid,projectid } = req.params;
    console.log(req.params);
    // const customerid = 77;
    db.query('SELECT * from project_master WHERE customer_id = ? AND project_id = ?',[customerid,projectid], (err, results) => {
        if (err) console.log(err);
        console.log(results);
        res.json(results);
    })
}


exports.getCustomer = (req, res) => {
    // const customerid = 77;
    db.query('SELECT * from supplier_information WHERE email = ?',[req.params.email], (err, results) => {
        if (err) console.log(err);
        console.log(results);
        res.json(results);
    })
}
