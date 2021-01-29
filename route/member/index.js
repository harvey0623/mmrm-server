const express = require('express');
const router = express.Router();
const memberDao = require('../../dao/member/index.js');
const checkResponse  = require('../../utility/checkResponse/index.js');
const { checkHasToken } = require('../../middleware/index.js');

router.post('/login', async (req, res) => {
   let response = await memberDao.login(req.body);
   let { status, statusCode } = checkResponse(response);
   if (status) {
      let limitTime = 3 * 24 * 60 * 60 * 1000;
      res.cookie('mmrmToken', response.results.member_access_token, {
         sameSite: 'Lax',
         expires: new Date(Date.now() + limitTime),
         signed: true
      });
   }
   res.status(statusCode).json({
      status,
      info: response
   });
});

router.post('/logout', checkHasToken, async (req, res) => {
   let token = req.signedCookies.mmrmToken;
   let response = await memberDao.logout(token);
   let { status, statusCode } = checkResponse(response);
   res.clearCookie('mmrmToken');
   res.status(statusCode).json({
      status,
      info: response
   });
});

router.post('/register_check', async (req, res) => { //註冊第一步驟
   let response = await memberDao.register_check(req.body);
   let { status, statusCode } = checkResponse(response);
   res.status(statusCode).json({
      status,
      info: response
   });
});

router.post('/register', async (req, res) => { //註冊第二步驟
   let response = await memberDao.register(req.body);
   console.log(response);
   let { status, statusCode } = checkResponse(response);
   res.status(statusCode).json({
      status,
      info: response
   });
});

module.exports = router;