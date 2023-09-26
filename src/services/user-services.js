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
// Create a new product
  createUser: (user) => {
        db.users.createUser(user)
      },

  // Delete a new product
  deleteUser: (id) => {
    db.users.deleteUser(id);
  },
}