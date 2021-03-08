const express = require('express');
const router = express.Router();
const couponDao = require('../../dao/coupon/index.js');
const checkResponse  = require('../../utility/checkResponse/index.js');
const { checkHasToken } = require('../../middleware/index.js');

router.post('/my_coupon_list', checkHasToken, async (req, res) => {
   let response = await couponDao.my_coupon_list({
      token: req.signedCookies.mmrmToken,
      ...req.body
   });
   let { status, statusCode } = checkResponse(response);
   res.status(statusCode).json({
      status,
      info: response
   });
});

router.post('/my_coupon_detail', checkHasToken, async (req, res) => {
   let response = await couponDao.my_coupon_detail({
      token: req.signedCookies.mmrmToken,
      ...req.body
   });
   let { status, statusCode } = checkResponse(response);
   res.status(statusCode).json({
      status,
      info: response
   });
});

router.post('/coupon_information', checkHasToken, async (req, res) => {
   let response = await couponDao.coupon_information({
      token: req.signedCookies.mmrmToken,
      ...req.body
   });
   let { status, statusCode } = checkResponse(response);
   res.status(statusCode).json({
      status,
      info: response
   });
});

router.post('/transfer_my_coupon', checkHasToken, async (req, res) => {
   let response = await couponDao.transfer_my_coupon({
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