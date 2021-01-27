const express = require('express');
const router = express.Router();
const memberDao = require('../../dao/member/index.js');

router.post('/member_summary', async (req, res) => {
   let result = await memberDao.memberSummary();
   res.json(result);
});

module.exports = router;