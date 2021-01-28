const cookieParser = require('cookie-parser');
const express = require('express');
const router = express.Router();
const memberDao = require('../../dao/member/index.js');
const checkResponse  = require('../../utility/checkResponse/index.js')

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

module.exports = router;