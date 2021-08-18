'use strict'
const User = use('App/Models/User');
 
class AuthController {
    async register({request, auth, response}) {
        const data_req = request.only(['role_id','username','email','password','fullname','gender','status'])

        const userExists = await User.findBy('email', data_req.email)
      
        // if user exists don't save
        if (userExists) {
          return response.status(400).send({ message: { error: 'User already registered' } })
        }
        // let user = await User.create(request.all())
        let user = await User.create(data_req)
    
        //generate token for user;
        let token = await auth.generate(user)
    
        Object.assign(user, token)
    
        return response.json(user)
      }
    
      async login({request, auth, response}) {
    
        let {email, password} = request.all();
    
        // try {
          const login = await auth.attempt(email, password)
          if (login) {
            let user = await User.findBy('email', email)
            let token = await auth.generate(user)
    
            Object.assign(user, token)
            return response.json(user)
            // response.send('Logged In Successfully')
            // return
          }
          response.unauthorized('Invalid credentails')
          // if (await auth.attempt(email, password)) {
          //   let user = await User.findBy('email', email)
          //   let token = await auth.generate(user)
    
          //   Object.assign(user, token)
          //   return response.json(user)
          // }
          // else{
          //   return response.json({
          //     message: 'Wrong Email or Password!'
          //   })
          // }
    
    
        // }
        // catch (e) {
        //   console.log(e)
        //   return response.json({message: 'You are not registered!'})
        // }
      }
}

module.exports = AuthController
