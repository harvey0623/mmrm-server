const express = require('express');
const router = express.Router();
const termDao = require('../../dao/term/index.js');
const checkResponse  = require('../../utility/checkResponse/index.js');

router.post('/brief_term', async (req, res) => {
   let response = await termDao.term(req.body);
   let { status, statusCode } = checkResponse(response);
   res.status(statusCode).json({
      status,
      info: response
   });
});

module.exports = router;