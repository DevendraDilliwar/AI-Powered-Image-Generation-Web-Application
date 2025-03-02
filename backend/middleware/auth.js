const jwt = require('jsonwebtoken')



const userAuth = async (req, res ,next)=>{
      const {token} = req.headers;

      if(!token){
        return res.json({ success:false, Message: 'Not Authorized. Login Again'})
      }

      try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET)

        if(tokenDecode.id){
            req.body.userId = tokenDecode.id
        }
        else{
            return res.json({ success:false, Message: 'Not Authorized. Login Again'})
        }

        next();

      } catch (error) {
         return res.json({ success:false, Message: error.Message})
      }
}

module.exports = userAuth;