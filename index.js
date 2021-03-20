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
const term = require('./route/term/index.js');
const transaction = require('./route/transaction/index.js');
const brand = require('./route/brand/index.js');
const point = require('./route/point/index.js');
const level = require('./route/level/index.js');
const coupon = require('./route/coupon/index.js');
const store = require('./route/store/index.js');
const activity = require('./route/activity/index.js');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser(process.env.COOKIE_SECRET_KEY));
app.use('/public', express.static(path.join(__dirname, 'public')));

const whitelist = [
   'http://localhost:8080', 
   'https://harvey0623.github.io/', 
   'https://mmrm-server.herokuapp.com/'
];

const corsOptions = {
   origin(origin, callback) {
      if (whitelist.indexOf(origin) !== -1) {
         callback(null, true)
      } else {
         callback(new Error('Not allowed by CORS'))
         // callback(null, true);
      }
   },
   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
   credentials: true
};

app.use(cors(corsOptions));

// app.use(cors({
//    origin: 'http://localhost:8080',
//    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//    credentials: true
// }));
app.listen(port);

app.use('/member', member);
app.use('/term', term);
app.use('/transaction', transaction);
app.use('/brand', brand);
app.use('/point', point);
app.use('/level', level);
app.use('/coupon', coupon);
app.use('/store', store);
app.use('/activity', activity);

app.use((req, res) => {
   res.write('<h1>Hello mmrm server ~</h1>');
   res.end();
});