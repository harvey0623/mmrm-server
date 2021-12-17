const mmrmAxios = require('../../utility/axios/mmrm.js');
const cryptoObj = require('../../utility/crypto/mmrm.js');
const brandDao = {
   async search_brand() {
      let signText = cryptoObj.wm_sign({
         timestamp: '2019/01/01 10:00:05'
      });
      return mmrmAxios({
         url: '/brand/search_brand',
         method: 'post',
         data: { sign: signText }
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   },
   async brand_information(payload) {
      let signText = cryptoObj.wm_sign({
         request_parameter: { ...payload },
         timestamp: '2019/01/01 10:00:05'
      });
      return mmrmAxios({
         url: '/brand/brand_information',
         method: 'post',
         data: { sign: signText }
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   }
}

module.exports = brandDao;
