const mmrmAxios = require('../../utility/axios/mmrm.js');
const cryptoObj = require('../../utility/crypto/mmrm.js');
const transactionDao = {
   async transaction_history(payload) {
      let signText = cryptoObj.wm_sign({
         member_access_token: payload.token,
         request_parameter: { 
            query_start_datetime: payload.query_start_datetime,
            query_end_datetime: payload.query_end_datetime,
            offset: payload.offset
         },
         timestamp: '2019/01/01 10:00:05'
      });
      return await mmrmAxios({
         url: '/transaction/transaction_history',
         method: 'post',
         data: { sign: signText }
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   },
   async transaction_detail(payload) {
      let signText = cryptoObj.wm_sign({
         member_access_token: payload.token,
         request_parameter: {
            transaction_id: payload.transaction_id
         },
         timestamp: '2019/01/01 10:00:05'
      });
      return await mmrmAxios({
         url: '/transaction/transaction_detail',
         method: 'post',
         data: { sign: signText }
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   }
};

module.exports = transactionDao;
