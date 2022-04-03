const db = require("../database");

exports.getProject = (req, res) => {
  // const customerid = 77;
  const { customerid } = req.params;
  db.query(
    "SELECT * from project_master WHERE customer_id = ?",
    [customerid],
    (err, results) => {
      if (err) console.log(err);
      console.log(results);
      res.json(results);
    }
  );
};

exports.getForecast = (req, res) => {
  db.query(
    "SELECT * from forecast WHERE customer_id = ?",
    [req.params.customer_id],
    (err, results) => {
      if (err) console.log(err);
      console.log(results);
      res.json(results);
    }
  );
};
exports.getSingleProject = (req, res) => {
  const { forecastid } = req.params;
  console.log(req.params, "sd");
  // const customerid = 77;
  db.query(
    "SELECT * from forecast WHERE id = ?",
    [forecastid],
    (err, results) => {
      if (err) console.log(err);
      console.log(results[0]);
      db.query(
        "SELECT * from project_master WHERE project_name = ?",
        [results[0].project_name],
        (err, results2) => {
          res.json({ forecast: results, project: results2 });
        }
      );
      // res.json(results);
    }
  );
};

exports.getCustomer = (req, res) => {
  // const customerid = 77;
  db.query(
    "SELECT * from supplier_information WHERE email = ?",
    [req.params.email],
    (err, results) => {
      if (err) console.log(err);
      console.log(results);
      res.json(results);
    }
  );
};
