const express = require('express')

const UserRouter = express.Router();

const { CreateUser, LoginUser,DeleteUser,UpdateUser,GetAllUsers, GetUser } = require('../controllers/UserCoontrollers');

UserRouter.post('/create', CreateUser);
UserRouter.post('/login', LoginUser);
UserRouter.put('/update/:id', UpdateUser);
UserRouter.delete('/delete/:id', DeleteUser);
UserRouter.get('/get',GetAllUsers );
UserRouter.get('/get/:userId',GetUser );

module.exports = UserRouter;