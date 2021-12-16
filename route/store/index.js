const express = require('express');
const router = express.Router();
const storeDao = require('../../dao/store/index.js');
const checkResponse  = require('../../utility/checkResponse/index.js');

router.post('/v1.1/search_coupon_available_store', async(req, res) => {
   let response = await storeDao.search_coupon_available_store({ ...req.body });
   let { status, statusCode } = checkResponse(response);
   res.status(statusCode).json({
      status,
      info: response
   });
});

router.post('/search_voucher_available_store', async(req, res) => {
   let response = await storeDao.search_voucher_store({ ...req.body });
   let { status, statusCode } = checkResponse(response);
   res.status(statusCode).json({
      status,
      info: response
   });
});

module.exports = router;