const mmrmAxios = require('../../utility/axios/mmrm.js');
const cryptoObj = require('../../utility/crypto/mmrm.js');
const activityDao = {
   async briefCoupon() {
      let signText = cryptoObj.wm_sign({
         request_parameter: {},
         timestamp: '2019/01/01 10:00:05'
      });
      return await mmrmAxios({
         url: '/activity/brief_coupon_activity_type',
         method: 'post',
         data: { sign: signText }
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   },
   async searchCoupon(payload) {
      let signText = cryptoObj.wm_sign({
         request_parameter: { ...payload },
         timestamp: '2019/01/01 10:00:05'
      });
      return await mmrmAxios({
         url: '/activity/search_coupon_activity',
         method: 'post',
         data: { sign: signText }
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   },
   async couponActivityInfo(payload) {
      let signText = cryptoObj.wm_sign({
         "request_parameter": { ...payload },
         "timestamp": "2019/01/01 10:00:05"
      });
      return await mmrmAxios({
         url: '/activity/coupon_activity_information',
         method: 'post',
         data: { sign: signText }
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   },
   async redeemCoupon(payload) {
      let { token, ...params } = payload;
      let signText = cryptoObj.wm_sign({
         member_access_token: token,
         request_parameter: { ...params },
         timestamp: '2019/01/01 10:00:05'
      });
      return await mmrmAxios({
         url: '/activity/redeem_coupon_activity',
         method: 'post',
         data: { sign: signText }
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   }
}

module.exports = activityDao;
