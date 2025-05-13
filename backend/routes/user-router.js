import { UserController } from '../controllers/user-controller.js';




export async function userRouter(server) {  
  const userController = new UserController();


  server.get('/users', userController.listUsers)

  server.get('/users/:id', userController.getUser)

  server.post('/users', userController.createUser)

  // server.put('/users/:id', userController.updateUser )

  server.delete('/users/:id', userController.deleteUser)

}











