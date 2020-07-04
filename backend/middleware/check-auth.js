const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try{
    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, 'Hey_this_is_my_angular_app_created_in_2020');
    next();
  }catch (err){
    res.status(401).json({ message: 'Auth Failed'});
  }
}
