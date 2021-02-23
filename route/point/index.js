const express = require('express');
const router = express.Router();
const pointDao = require('../../dao/point/index.js');
const checkResponse  = require('../../utility/checkResponse/index.js');
const { checkHasToken } = require('../../middleware/index.js');

router.post('/point_history', checkHasToken, async (req, res) => {
   let response = await pointDao.point_history({
      token: req.signedCookies.mmrmToken,
      ...req.body
   });
   let { status, statusCode } = checkResponse(response);
   res.status(statusCode).json({
      status,
      info: response
   });
});

router.post('/point_due_to_expire', checkHasToken, async (req, res) => {
   let response = await pointDao.point_due_to_expire({
      token: req.signedCookies.mmrmToken,
      ...req.body
   });
   let { status, statusCode } = checkResponse(response);
   res.status(statusCode).json({
      status,
      info: response
   });
});

router.post('/point_information', async (req, res) => {
   let response = await pointDao.point_information(req.body);
   let { status, statusCode } = checkResponse(response);
   res.status(statusCode).json({
      status,
      info: response
   });
});

router.post('/external_point_information', async (req, res) => {
   let response = await pointDao.external_point_information(req.body);
   let { status, statusCode } = checkResponse(response);
   res.status(statusCode).json({
      status,
      info: response
   });
});

module.exports = router;