const mmrmAxios = require('../../utility/axios/mmrm.js');
const cryptoObj = require('../../utility/crypto/mmrm.js');
const couponDao = {
   async my_coupon_list(payload) {
      let signText = cryptoObj.wm_sign({
         member_access_token: payload.token,
         request_parameter: {
            type: payload.type,
            offset: payload.offset
         },
         timestamp: '2019/01/01 10:00:05'
      });
      return mmrmAxios({
         url: '/coupon/my_coupon_list',
         method: 'post',
         data: { sign: signText }
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   },
   async my_coupon_detail(payload) {
      let signText = cryptoObj.wm_sign({
         member_access_token: payload.token,
         request_parameter: {
            my_coupon_id: payload.my_coupon_id
         },
         timestamp: '2019/01/01 10:00:05'
      });
      return mmrmAxios({
         url: '/coupon/my_coupon_detail',
         method: 'post',
         data: { sign: signText }
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   },
   async coupon_information(payload) {
      let signText = cryptoObj.wm_sign({
         member_access_token: payload.token,
         request_parameter: {
            coupon_ids: payload.coupon_ids,
            full_info: payload.full_info
         },
         timestamp: '2019/01/01 10:00:05'
      });
      return mmrmAxios({
         url: '/coupon/coupon_information',
         method: 'post',
         data: { sign: signText }
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   },
   async transfer_my_coupon(payload) {
      let signText = cryptoObj.wm_sign({
         member_access_token: payload.token,
         request_parameter: {
            my_coupon_id: payload.my_coupon_id,
            account: payload.account
         },
         timestamp: '2019/01/01 10:00:05'
      });
      return mmrmAxios({
         url: '/coupon/transfer_my_coupon',
         method: 'post',
         data: { sign: signText }
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   },
};

module.exports = couponDao;