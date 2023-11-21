// ** Requires's ----------------------------------------------------------------------------------------------
const bcrypt = require("bcryptjs");
const { Users } = require("../database/models/index");
const { Categories } = require("../database/models/index");
const { v4: uuidv4 } = require("uuid");

module.exports = {
  // Get the complete list of users that exist in the database
  getAllUsers: () => {
    return Users.findAll();
  },
  getAllCategoryUser: () => {
    return Categories.findAll({ include: [{ association: "user" }] });
  },
  // Get user from DB
  getUser: (id) => {
    return Users.findByPk(id, {
      include: [{ association: "category" }, { association: "build_type" }],
    });
  },
  // Get user from DB by Email
  getUserByEmail: (userEmail) => {
    return Users.findOne({
      where: {
        email: userEmail,
      },
    });
  },
  // Create a new User
  saveInDb: function (newUser, file) {
    return Users.create(
      {
        id: uuidv4(),
        first_name: newUser.name,
        last_name: newUser.surname,
        email: newUser.email,
        birthday: newUser.birthDay,
        address: newUser.address,
        id_build_type: newUser.buildtype,
        zipcode: newUser.zipcode,
        password: this.encryptedPassword(newUser.password),
        id_category: 2,
        image: file ? file.filename : "default_user.png",
      },
      { include: [{ association: "category" }, { association: "build_type" }] }
    );
  },
  updateUser: function (user, idUser, file) {
    return Users.update(
      {
        first_name: user.name,
        last_name: user.surname,
        email: user.email,
        birthday: user.birthDay,
        address: user.address,
        id_build_type: user.buildtype,
        zipcode: user.zipcode,
        password: this.encryptedPassword(user.password),
        id_category: user.id_category,
        image: file ? file.filename : "default_user.png",
      },
      {
        where: { id: idUser },
      },
      { include: [{ association: "category" }, { association: "build_type" }] }
    );
  },
  // Accion de actualizar categoria del usuario desde el admin
  updateUserByAdmin: function (idUser, data) {
    return Users.update(
      {
        id_category: data.userCategory,
      },
      {
        where: { id: idUser },
      },
      { include: [{ association: "category" }] }
    );
  },

  // Delete a User
  deleteUser: (idUser) => {
    return Users.destroy({
      where: { id: idUser },
    });
  },
  //Encriptar password
  encryptedPassword: function (password) {
    const salt = bcrypt.genSaltSync(10);
    let passEncrypted = bcrypt.hashSync(password, salt);
    return passEncrypted;
  },
  descryptedPassword: function (password, hashPassword) {
    let passCheck = bcrypt.compareSync(password, hashPassword);
    return passCheck;
  },
  authentication: async function (userEmail, password) {
    console.log(userEmail, password);
    const infoUser = await this.getUserByEmail(userEmail);
    if (this.descryptedPassword(password, infoUser.password)) {
      return infoUser;
    } else {
      return false;
    }
  },
};
