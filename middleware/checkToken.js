const checkHasToken = function(req, res, next) {
   let mmrmToken = req.signedCookies.mmrmToken;
   if (mmrmToken !== undefined) {
      return next();
   } else {
      res.status(401).json({ msg: 'no tokne' });
   }
}

exports.checkHasToken = checkHasToken;