const express = require('express');
const Router = express.Router();
const UserServices = require('../services/user.services')

Router.get('/get-all-user',(request,response) => {
  const userService = new UserServices();
  const users = userService.getAllUsers();
  response.json(users)
})

module.exports = Router;