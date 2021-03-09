const mmrmAxios = require('../../utility/axios/mmrm.js');
const cryptoObj = require('../../utility/crypto/mmrm.js');
const storeDao = {
   async search_coupon_available_store(payload) {
      let signText = cryptoObj.wm_sign({
         request_parameter: { ...payload },
         timestamp: '2019/01/01 10:00:05'
      });
      return mmrmAxios({
         url: '/store/v1.1/search_coupon_available_store',
         method: 'post',
         data: { sign: signText }
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   },
};

module.exports = storeDao;