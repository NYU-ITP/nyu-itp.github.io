const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

const SELECT_ALL_ISSUES_QUERY = 'SELECT * from issue';

const connection = mysql.createConnection({
  host: '34.234.205.122',
  user: 'root',
  password: 'DWDStudent2017',
  database:'311app',
  port: 3306
});

connection.connect(err => {
  if (err) {
    return err;
  } else {
    console.log("Connect Mysql Success");
  }
});

app.use(cors());

app.get('/', (req, res) => {
  res.send("go to /issues to see issues");
});

app.get('/issues', (req, res) => {
  connection.query(SELECT_ALL_ISSUES_QUERY, (err, results) => {
    if (err) {
      return res.send(err)
    } else {
      return res.json({
        data: results
      })
    }
  });
});



app.listen(5000, () => {
  console.log('Server listening on port 5000');
});
