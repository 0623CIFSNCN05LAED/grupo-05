// ** Requires's ----------------------------------------------------------------------------------------------
const db = require("../data/db");
const bcrypt = require("bcrypt");

module.exports = {
// Get the complete list of users that exist in the database  
  getAllUsers: () => {
      return db.users.getUsers();
      },  
  // Get user from DB  
  getUser: (id) => {
    const user =  db.users.getUserById(id); 
    return user;
    },  
// Create a new User
  createUser: (user) => {
        db.users.createUser(user)
      },
  updateUser: (user,id) => {
    const userData = {
      id: id,
      ...user
    }
    db.users.update(userData)

  },
  // Delete a User
  deleteUser: (id) => {
    db.users.deleteUser(id);
  },
  //Encriptar password
  encryptedPassword: function (password) {
    let passEncrypted = bcrypt.hashSync(password,10)
    return passEncrypted
  },
  descryptedPassword: function (password,hashPassword) {
    let passCheck = bcrypt.compareSync(password,hashPassword)
    return passCheck
  },

  //autentificacion
  authentication: function (email, password)  {
    const data = db.users.getUserByEmail(email)

    if(this.descryptedPassword(password,data.password)){
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