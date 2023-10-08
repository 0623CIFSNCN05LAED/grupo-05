// ** Requires's ----------------------------------------------------------------------------------------------
const db = require("../data/db");

module.exports = {
// Get the complete list of users that exist in the database  
  getAllUsers: () => {
      return db.users.getUsers();
      },  
  // Get user from DB  
  getUser: (id) => {
    const user =  db.users.findById(id); 
    return user;
    },  
// Create a new User
  createUser: (user) => {
        db.users.createUser(user)
      },

  // Delete a User
  deleteUser: (id) => {
    db.users.deleteUser(id);
  },
  //autentificacion
  authentication: (email, password)  => {
    const data = db.users.getUserByEmail(email)
    if(data.password === password){
      return  {
        id: data.id,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,       
      }
    }else{
      return false
    }
  }
}