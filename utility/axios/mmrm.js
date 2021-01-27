const axios = require('axios');
const mmrmAxios = axios.create({
   baseURL: process.env.MMRM_BASE_URL,
   headers: {
      'Content-Type': 'application/json',
      'language': 'zh_TW',
      'app-id': process.env.MMRM_APP_ID,
      'device-uuid': process.env.MMRM_DEVICE_UUID
   },
});

module.exports = mmrmAxios;