var express = require('express');
var bodyParser = require('body-parser');
const request = require('request');
const yargs = require('yargs');

var app = express();
app.use(bodyParser.json());