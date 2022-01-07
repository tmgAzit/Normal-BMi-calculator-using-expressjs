// jshint esversion: 6

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', function (req, res) {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;

  res.send('The result of the calculation is ' + result);
});

app.get('/bmiCalculator', function (req, res) {
  res.sendFile(__dirname + '/bmiCalculator.html');
});

app.post('/bmiCalculator', function (req, res) {
  var height = parseFloat(req.body.height);
  var weight = parseFloat(req.body.weight);
  var calculator = weight / Math.pow(height, 2);

  res.send('Your BMI is ' + calculator);
});
app.listen(3000, function () {
  console.log('Server has started on port 3000.');
});
