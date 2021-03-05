const express = require('express');
const router = express.Router();
const levelDao = require('../../dao/level/index.js');
const checkResponse  = require('../../utility/checkResponse/index.js');
const { checkHasToken } = require('../../middleware/index.js');

router.post('/level_information', checkHasToken, async (req, res) => {
   let response = await levelDao.info(req.body);
   let { status, statusCode } = checkResponse(response);
   res.status(statusCode).json({
      status,
      info: response
   });
});

module.exports = router;