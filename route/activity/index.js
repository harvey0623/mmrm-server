const express = require('express');
const router = express.Router();
const activityDao = require('../../dao/activity/index.js');
const checkResponse  = require('../../utility/checkResponse/index.js');

router.post('/brief_coupon_activity_type', async (req, res) => {
   let response = await activityDao.briefCoupon();
   let { status, statusCode } = checkResponse(response);
   res.status(statusCode).json({
      status,
      info: response
   });
});

router.post('/search_coupon_activity', async (req, res) => {
   let response = await activityDao.searchCoupon(req.body);
   let { status, statusCode } = checkResponse(response);
   res.status(statusCode).json({
      status,
      info: response
   });
});

router.post('/coupon_activity_information', async (req, res) => {
   let response = await activityDao.couponActivityInfo(req.body);
   let { status, statusCode } = checkResponse(response);
   res.status(statusCode).json({
      status,
      info: response
   });
});

router.post('/redeem_coupon_activity', async (req, res) => {
   let response = await activityDao.redeemCoupon({
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