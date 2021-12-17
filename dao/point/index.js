const mmrmAxios = require('../../utility/axios/mmrm.js');
const cryptoObj = require('../../utility/crypto/mmrm.js');
const pointDao = {
   async point_history(payload) {
      let signText = cryptoObj.wm_sign({
         member_access_token: payload.token,
         request_parameter: { 
            point_id: payload.point_id,
            query_start_datetime: payload.query_start_datetime,
            query_end_datetime: payload.query_end_datetime,
            offset: payload.offset
         },
         timestamp: '2019/01/01 10:00:05'
      });
      return mmrmAxios({
         url: '/point/point_history',
         method: 'post',
         data: { sign: signText }
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   },
   async point_due_to_expire(payload) {
      let signText = cryptoObj.wm_sign({
         member_access_token: payload.token,
         request_parameter: { 
            point_id: payload.point_id,
         },
         timestamp: '2019/01/01 10:00:05'
      });
      return mmrmAxios({
         url: '/point/point_due_to_expire',
         method: 'post',
         data: { sign: signText }
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   },
   async point_information(payload) {
      let signText = cryptoObj.wm_sign({
         request_parameter: { ...payload },
         timestamp: '2019/01/01 10:00:05'
      });
      return mmrmAxios({
         url: '/point/point_information',
         method: 'post',
         data: { sign: signText }
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   },
   async external_point_information(payload) {
      let signText = cryptoObj.wm_sign({
         request_parameter: { ...payload },
         timestamp: '2019/01/01 10:00:05'
      });
      return mmrmAxios({
         url: '/point/external_point_information',
         method: 'post',
         data: { sign: signText }
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   },
}

module.exports = pointDao;