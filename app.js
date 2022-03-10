const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const expressLayouts = require('express-ejs-layouts')
require('dotenv').config()
const fileUpload = require("express-fileupload");
const pdfParse = require("pdf-parse");

app.use(fileUpload());

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))

app.use('/', router);
app.use(expressLayouts)
app.set('layout', './layouts/default')
app.set('view engine', 'ejs')

app.get('', (req, res) => {
  res.render('index', {title: 'azlanio'})
})

app.get('/intro', (req, res) => {
  res.render('intro')
})

//SYSTEM

app.get('/visitor', (req, res) => {
  res.render((path.join(__dirname, 'views/system','visitor.ejs')))
})

app.get('/about', (req, res) => {
  res.render((path.join(__dirname, '/views/system','about.ejs')))
})

app.get('/dashboard', (req, res) => {
  res.render((path.join(__dirname, '/views/system','dashboard.ejs')))
})

app.get('/home', (req, res) => {
  res.render((path.join(__dirname, '/views/system','home.ejs')))
})

app.get('/settings', (req, res) => {
  res.render((path.join(__dirname, '/views/system','settings.ejs')))
})

app.get('/sitemap', (req, res) => {
  res.render((path.join(__dirname, '/views/system','sitemap.ejs')))
})

app.get('/test', (req, res) => {
  res.render((path.join(__dirname, '/views/system','test.ejs')))
})

// STUDENT

app.get('/account', (req, res) => {
  res.render((path.join(__dirname, '/views/student','account.ejs')))
})

app.get('/class', (req, res) => {
  res.render((path.join(__dirname, '/views/student','class.ejs')))
})

app.get('/cockpit', (req, res) => {
  res.render((path.join(__dirname, '/views/student','cockpit.ejs')))
})

app.get('/messaging', (req, res) => {
  res.render((path.join(__dirname, '/views/student','messaging.ejs')))
})

app.get('/email', (req, res) => {
  res.render((path.join(__dirname, '/views/student','email.ejs')))
})


app.get('/progress', (req, res) => {
  res.render((path.join(__dirname, '/views/student','progress.ejs')))
})

app.get('/registration', (req, res) => {
  res.render((path.join(__dirname, '/views/student','registration.ejs')))
})

app.get('/schedule', (req, res) => {
  res.render((path.join(__dirname, '/views/student','schedule.ejs')))
})

app.get('/account', (req, res) => {
  res.render((path.join(__dirname, '/views/student','account.ejs')))
})

app.get('/social', (req, res) => {
  res.render((path.join(__dirname, '/views/student','social.ejs')));
  const apiKey = process.env.API_KEY;
})

app.get('/storage', (req, res) => {
  res.render((path.join(__dirname, '/views/student','storage.ejs')))
})

app.get('/videos', (req, res) => {
  res.render((path.join(__dirname, '/views/student','videos.ejs')))
})

app.get('/news', (req, res) => {
  res.render((path.join(__dirname, '/views/student','news.ejs')))
})

// add the router
app.listen(process.env.port || 3000);
console.log('Running at Port 3000');