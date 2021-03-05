const mmrmAxios = require('../../utility/axios/mmrm.js');
const cryptoObj = require('../../utility/crypto/mmrm.js');
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
         timestamp: '2019/01/01 10:00:05'
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
         timestamp: '2019/01/01 10:00:05'
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
         timestamp: '2019/01/01 10:00:05'
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
   register_verify(payload) {
      let signText = cryptoObj.wm_sign({
         temp_access_token: payload.temp_access_token,
         request_parameter: {
            verify_code: payload.verify_code
         },
         timestamp: '2019/01/01 10:00:05'
      });
      return mmrmAxios({
         url: '/member/register_verify',
         method: 'post',
         data: { sign: signText }
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   },
   forget_password(payload) {
      let signText = cryptoObj.wm_sign({
         request_parameter: { ...payload },
         timestamp: '2019/01/01 10:00:05'
      });
      return mmrmAxios({
         url: '/member/v1.1/forget_password',
         method: 'post',
         data: { sign: signText }
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   },
   forget_password_verify(payload) {
      let signText = cryptoObj.wm_sign({
         temp_access_token: payload.temp_access_token,
         request_parameter: { 
            verify_code: payload.verify_code
         },
         timestamp: '2019/01/01 10:00:05'
      });
      return mmrmAxios({
         url: '/member/forget_password_verify',
         method: 'post',
         data: { sign: signText }
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   },
   reset_password(payload) {
      let signText = cryptoObj.wm_sign({
         temp_access_token: payload.temp_access_token,
         request_parameter: { 
            new_password: payload.new_password
         },
         timestamp: '2019/01/01 10:00:05'
      });
      return mmrmAxios({
         url: '/member/reset_password',
         method: 'post',
         data: { sign: signText }
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   },
   verify_member_password(payload) {
      let signText = cryptoObj.wm_sign({
         member_access_token: payload.token,
         request_parameter: { 
            password: payload.password
         },
         timestamp: '2019/01/01 10:00:05'
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
   },
   get_member_profile(token) {
      let signText = cryptoObj.wm_sign({
         member_access_token: token,
         request_parameter: {},
         timestamp: "2019/01/01 10:00:05"
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
   update_member_profile(payload) {
      let signText = cryptoObj.wm_sign({
         member_access_token: payload.token,
         request_parameter: {
            member_profile: payload.member_profile
         },
         timestamp: '2019/01/01 10:00:05'
      });
      return mmrmAxios({
         url: '/member/update_member_profile',
         method: 'post',
         data: { sign: signText }
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   },
   update_member_mobile(payload) {
      let signText = cryptoObj.wm_sign({
         member_access_token: payload.token,
         request_parameter: {
            mobile: payload.mobile,
            password: payload.password
         },
         timestamp: '2019/01/01 10:00:05'
      });
      return mmrmAxios({
         url: '/member/update_member_mobile',
         method: 'post',
         data: { sign: signText }
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   },
   member_verify(payload) {
      let signText = cryptoObj.wm_sign({
         member_access_token: payload.token,
         request_parameter: {
            verify_code: payload.verify_code,
         },
         timestamp: '2019/01/01 10:00:05'
      });
      return mmrmAxios({
         url: '/member/member_verify',
         method: 'post',
         data: { sign: signText }
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   },
   update_member_password(payload) {
      let signText = cryptoObj.wm_sign({
         member_access_token: payload.token,
         request_parameter: {
            old_password: payload.old_password,
            new_password: payload.new_password
         },
         timestamp: '2019/01/01 10:00:05'
      });
      return mmrmAxios({
         url: '/member/update_member_password',
         method: 'post',
         data: { sign: signText }
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   },
   member_summary(token) {
      let signText = cryptoObj.wm_sign({
         member_access_token: token,
         request_parameter: {},
         timestamp: '2019/01/01 10:00:05'
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
   get_member_card(token) {
      let signText = cryptoObj.wm_sign({
         member_access_token: token,
         request_parameter: {},
         timestamp: '2019/01/01 10:00:05'
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
   }
}

module.exports = memberDao;