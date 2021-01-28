const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
const cors = require('cors');
const path = require('path');
const port = process.env.PORT || 3030;
const dotenv = require('dotenv').config({
   path: '.env.dev'
});
const member = require('./route/member/index.js');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser(process.env.COOKIE_SECRET_KEY));
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(cors({
   origin: 'http://localhost:8080',
   methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
   credentials: true
}));
app.listen(port);

app.use('/member', member);

app.use((req, res) => {
   res.write('<h1>Hello mmrm server ~</h1>');
   res.end();
});