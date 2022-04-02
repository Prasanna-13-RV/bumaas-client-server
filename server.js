if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const express = require('express');
const { v4: uuid } = require('uuid');

const db = require('./database');

const app = express();

app.use(express.json());
const route = require('./routes/route');

app.use('/', route);
app.get('/forecast', (req, res) => {
	db.query('SELECT * FROM forecast', (err, results) => {
		if (err) console.log(err);
		res.json(results);
	});
});

app.post('/forecast', (req, res) => {
	const months = Object.keys(req.body).filter((key) =>
		key.includes('forecast_month')
	);

	class Forecast {
		constructor() {
			months.forEach((month) => {
				this[month] = req.body[month];
			});
		}
	}

	const noOfMonths = months.length;

	db.query(
		'INSERT INTO forecast SET no_of_months = ?, project_name = ?, remarks = ?, months = ?',
		[
			noOfMonths,
			req.body.forecast_name,
			req.body.remarks,
			JSON.stringify(new Forecast())
		],
		(err, results) => {
			if (err) console.log(err);
			res.json(results);
		}
	);
});

app.delete('/forecast/:id', (req, res) => {
	db.query(
		'DELETE FROM forecast WHERE id = ?',
		[req.params.id],
		(err, results) => {
			if (err) console.log(err);
			res.json('OK');
		}
	);
});

app.listen(process.env.PORT, () =>
	console.log('Server is running on port 8090')
);
