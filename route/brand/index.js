const express = require('express');
const router = express.Router();
const brandDao = require('../../dao/brand/index.js');
const checkResponse  = require('../../utility/checkResponse/index.js');

router.post('/search_brand', async (req, res) => {
   let response = await brandDao.search_brand();
   let { status, statusCode } = checkResponse(response);
   res.status(statusCode).json({
      status,
      info: response
   });
});

router.post('/brand_information', async (req, res) => {
   let response = await brandDao.brand_information(req.body);
   let { status, statusCode } = checkResponse(response);
   res.status(statusCode).json({
      status,
      info: response
   });
});

module.exports = router;