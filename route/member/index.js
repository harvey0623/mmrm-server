const express = require('express');
const router = express.Router();
const memberDao = require('../../dao/member/index.js');
const checkResponse  = require('../../utility/checkResponse/index.js')

router.post('/login', async (req, res) => {
   let response = await memberDao.login(req.body);
   let { status, statusCode } = checkResponse(response);
   console.log(status, statusCode)
   res.status(statusCode).json({
      status,
      info: response
   });
});

module.exports = router;