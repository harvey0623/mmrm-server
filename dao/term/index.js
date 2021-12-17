const mmrmAxios = require('../../utility/axios/mmrm.js');
const cryptoObj = require('../../utility/crypto/mmrm.js');
const termDao = {
   async term(payload) {
      let signText = cryptoObj.wm_sign({
         request_parameter: { ...payload },
         timestamp: '2019/01/01 10:00:05'
      });
      return mmrmAxios({
         url: '/term/brief_term',
         method: 'post',
         data: { sign: signText }
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   },
};

module.exports = termDao;