let checkResponse = function(response) {
   let message = response.rcrm.RC;
   let status = message === 'C01';
   let statusCode = 200;
   if (status) {
      statusCode = 200;
   } else {
      let err401 = ['TOKEN_IS_NOT_EXIST', 'THIRD_CRM_TOKEN_IS_NOT_VALID'];
      let isInclude = err401.includes(message);
      statusCode = isInclude ? 401 : 400;
   }
   return { status, statusCode };
}

module.exports = checkResponse;