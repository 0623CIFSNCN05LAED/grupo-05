// ** Requires's ----------------------------------------------------------------------------------------------
const db = require("../data/db");
const bcrypt = require("bcryptjs");
const { Users } = require('../database/models/index')

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
  saveInDb: function (newUser,file) {
    return Users.create({
      first_name: newUser.name,
      last_name: newUser.surname,
      email: newUser.email,
      birthday: newUser.birthDay,
      address: newUser.address,
      id_build_type: newUser.buildtype,
      zipcode: newUser.zipcode,
      password: this.encryptedPassword(newUser.password),
      id_category: 0,
      image: file ? file.filename : 'default_user.png'
    },{include:[{association: "category"},{association: "build_type"}]});
  },
  updateUser: (user,id) => {
    const userData = {
      id: id,
      ...user
    }
    db.users.update(userData)

  },
  // Delete a User
  deleteUser: (idUser) => {
     return Users.destroy({
            where: {id: idUser}
        })
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