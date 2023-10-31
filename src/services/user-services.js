// ** Requires's ----------------------------------------------------------------------------------------------
const db = require("../data/db");
const bcrypt = require("bcryptjs");

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
    const salt = bcrypt.genSaltSync(10)
    let passEncrypted = bcrypt.hashSync(password,salt)
    return passEncrypted
  },
  descryptedPassword: function (password,hashPassword) {
    let passCheck = bcrypt.compareSync(password,hashPassword)
    return passCheck
  },
  authentication: function (email, password) {
    console.log(email,password)
    const data = db.users.getUserByEmail(email);
    if (data && this.descryptedPassword(password, data.password)) {
        return {
            id: data.id,
            firstName: data.first_name,
            lastName: data.last_name,
            email: data.email,
            category: data.category
        };
    } else {
        return false;
    }
}
}