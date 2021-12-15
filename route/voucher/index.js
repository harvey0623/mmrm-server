const express = require('express');
const router = express.Router();
const voucherDao = require('../../dao/voucher/index.js');

router.post('/voucher_information', async (req, res) => {
   let result = await voucherDao.voucherInfo(req.body);
   res.json(result);
});

module.exports = router;