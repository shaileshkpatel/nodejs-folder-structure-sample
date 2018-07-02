var express = require('express');
var bodyParser = require('body-parser');
var userService = require('./../../services/user/service')

class UserController {
  constructor() {}

  //////////////////////////////////////////////////////////////////////
  //                      Initilization at App Start                  //
  //////////////////////////////////////////////////////////////////////
  static init(app) {
    const router = express.Router();

    // Install bodyParser parameters
    router.use(bodyParser.urlencoded({
      extended: true
    }));
    router.use(bodyParser.json());

    app.use('/user', router);

    // LIST All REST Endpoints 
    router.get('/getUsers', UserController.getAllUsers);

  }

  //////////////////////////////////////////////////////////////////////
  //                      REST Endpoints Starts (static)              //
  //////////////////////////////////////////////////////////////////////

  /**
   * 
   */
  static getAllUsers(req, res) {
    const users = userService.getAllUsers();
    res.status(200).send(JSON.stringify(users));
  }
}

module.exports = UserController.init;