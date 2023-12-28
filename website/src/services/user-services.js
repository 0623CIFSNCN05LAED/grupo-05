// ** Requires's ----------------------------------------------------------------------------------------------
const bcrypt = require("bcryptjs");
const { Users, Sequelize } = require("../database/models/index");
const { Categories } = require("../database/models/index");
const { v4: uuidv4 } = require("uuid");

module.exports = {
  // Get the complete list of users that exist in the database
  getAllUsers: () => {
    return Users.findAll();
  },
  getAllUsersApi: () => {
    return Users.findAll({
      include: [{ association: "category" }],
      attributes: ["id", "first_name", "last_name", "email", "category.name"],
    });
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
  getUserApi: (id) => {
    return Users.findByPk(id, {
      include: [{ association: "category" }, { association: "build_type" }],
      attributes: [
        "id",
        "first_name",
        "last_name",
        "email",
        "birthday",
        "address",
        "image",
      ],
    });
  },
  getImageApi: function (id) {
    return this.getUser(id, { attributes: ["image"] });
  },
  // Get user from DB by Email
  getUserByEmail: (userEmail) => {
    return Users.findOne({
      where: {
        email: userEmail,
      },
    });
  },
  getAllusersAndCount: ({ pageSize, offset }) => {
    return Users.findAndCountAll({
      limit: pageSize,
      offset: offset,
      order: [["first_name", "ASC"]],
      attributes: ["id", "first_name", "last_name", "email"],
    });
  },

  // Buscar usuario
  search: async (query) => {
    const user = await Users.findOne({
      where: {
        first_name: {
          [Sequelize.Op.like]: "%" + query + "%",
        },
      },
      include: [{ association: "category" }, { association: "build_type" }],
    });
    return user;
  },
  // Create a new User
  saveInDb: function (newUser, file) {
    
    return Users.create(
      {
        id: uuidv4(),
        first_name: newUser.firstName,
        last_name: newUser.lastName,
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
  updateUser: async function (user, idUser, file) {
    const userDb =  await this.getUser(idUser)
    return Users.update(
      {
        first_name: user.firstName,
        last_name: user.lastName,
        email: user.email,
        birthday: user.birthDay,
        address: user.address,
        id_build_type: user.buildtype,
        zipcode: user.zipcode,
        password: !user.password ?  userDb.password : this.encryptedPassword(user.password),
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
    if (infoUser) {
      if (this.descryptedPassword(password, infoUser.password)) {
        return infoUser;
      } else {
        return false;
      }
    } else {
      return false;
    }
  },
  getLastUser: async () => {
    return Users.findAll({
      attributes: [
        "id","created_at"
      ],
      order: [
        ['created_at', 'DESC']
    ],
      limit: 1,
      raw: true
    }).then((user) => {
      return user
    });
  },
  
};
