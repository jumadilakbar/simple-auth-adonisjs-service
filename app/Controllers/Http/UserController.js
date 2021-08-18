'use strict'
const User = use('App/Models/User');
class UserController {

    async getUsers({request, auth ,response}) {
        try {
            if (await auth.check()) {
            let users = await User.all()
            // const headerToken = auth.getAuthHeader();

            return response.json(users)
            }
        }
        catch (e) {
            console.log(e)
            return response.json({message: 'You are not authorized to perform this action'})
          }
      }

}

module.exports = UserController
