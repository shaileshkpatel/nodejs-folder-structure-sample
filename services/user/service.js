const userModel = require('./../../models/user/model');

class UserService {

  constructor() {}

  // Make Singleton myself
  static getInstance() {
    if (!UserService.instance) {
      UserService.instance = new UserService();
    }
    return UserService.instance;
  }

  /**
   * 
   */
  getAllUsers() {
    const users = userModel.getAllUsers();
    return users;
  }
}

module.exports = UserService.getInstance();