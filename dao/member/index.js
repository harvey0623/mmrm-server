const mmrmAxios = require('../../utility/axios/mmrm.js');
const cryptoObj = require('../../utility/crypto/mmrm.js');
const access_token = process.env.MMRM_ACCESS_TOKEN
const memberDao = {
   login(payload) {
      let signText = cryptoObj.wm_sign({
         request_parameter: { ...payload },
         timestamp: '2019/01/01 10:00:05'
      });
      return mmrmAxios({
         url: '/member/login',
         method: 'post',
         data: { sign: signText }
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   },
   logout(token) {
      let signText = cryptoObj.wm_sign({
         member_access_token: token,
         request_parameter: {},
         timestamp: "2019/01/01 10:00:05"
      });
      return mmrmAxios({
         url: '/member/logout',
         method: 'post',
         data: { sign: signText }
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   },
   register_check(payload) {
      let signText = cryptoObj.wm_sign({
         request_parameter: {
            register_check: { ...payload }
         },
         timestamp: "2019/01/01 10:00:05"
      });
      return mmrmAxios({
         url: '/member/register_check',
         method: 'post',
         data: { sign: signText }
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   },
   register(payload) {
      let signText = cryptoObj.wm_sign({
         request_parameter: {
            register: { ...payload }
         },
         timestamp: "2019/01/01 10:00:05"
      });
      return mmrmAxios({
         url: '/member/register',
         method: 'post',
         data: { sign: signText }
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   },
   memberSummary() {
      let signText = cryptoObj.wm_sign({
         "member_access_token": access_token,
         "request_parameter": {},
         "timestamp": "2019/01/01 10:00:05"
      });
      return mmrmAxios({
         url: '/member/member_summary',
         method: 'post',
         data: { sign: signText }
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   },
   memberProfile() {
      let signText = cryptoObj.wm_sign({
         "member_access_token": access_token,
         "request_parameter": {},
         "timestamp": "2019/01/01 10:00:05"
      });
      return mmrmAxios({
         url: '/member/get_member_profile',
         method: 'post',
         data: { sign: signText }
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   },
   memberCard() {
      let signText = cryptoObj.wm_sign({
         "member_access_token": access_token,
         "request_parameter": {},
         "timestamp": "2019/01/01 10:00:05"
      });
      return mmrmAxios({
         url: '/member/get_member_card',
         method: 'post',
         data: { sign: signText }
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   },
   verifyPassword(payload) {
      let signText = cryptoObj.wm_sign({
         "member_access_token": access_token,
         "request_parameter": { ...payload },
         "timestamp": "2019/01/01 10:00:05"
      });
      return mmrmAxios({
         url: '/member/verify_member_password',
         method: 'post',
         data: { sign: signText }
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   }
}

module.exports = memberDao;