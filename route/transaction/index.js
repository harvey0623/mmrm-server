const express = require('express');
const router = express.Router();
const transactionDao = require('../../dao/transaction/index.js');
const checkResponse = require('../../utility/checkResponse/index.js');
const { checkHasToken } = require('../../middleware/index.js');

router.post('/transaction_history', checkHasToken, async (req, res) => {
   let response = await transactionDao.transaction_history({
      token: req.signedCookies.mmrmToken,
      ...req.body
   });
   let { status, statusCode } = checkResponse(response);
   res.status(statusCode).json({
      status,
      info: response
   });
});

router.post('/transaction_detail', checkHasToken, async (req, res) => {
   let response = await transactionDao.transaction_detail({
      token: req.signedCookies.mmrmToken,
      ...req.body
   });
   let { status, statusCode } = checkResponse(response);
   res.status(statusCode).json({
      status,
      info: response
   });
});

module.exports = router;