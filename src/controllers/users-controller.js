const userService = require("../services/user-services");

module.exports = {
  // Vista listado de usuarios 
  userList: (req, res) => {
    const allUsers = usersService.getAllUsers();
    console.log(allUsers);
    // res.render('user-list', {users: userService.getAllusers()});*/

  },
  // Vista detalle de un usuario
  userDetail: (req, res) => {
    const id = req.params.id;
    const user = userService.getUser(id);
    //    res.render('user-detail', { user });
  },
  // Vista formulario de edición de un usuario
  userEdit: (req, res) => {
    const id = req.params.id;
    const errors = req.session.errors;
    const user = userService.getUser(id);
    res.render('edit-user', {
      userData: req.session.userData,
      user: user,
      errors: errors ? errors : null,
    })
  },
  // Vista formulario de borrado de usuario
  userDelete: (req, res) => {
  },
  // Vista formulario de Login
  showLogin: (req, res) => {
    const errors = req.session.errors;
    const oldData = req.session.oldData;
    req.session.errors = null;
    req.session.oldData = null;
    console.log(req.session);
     res.render('login',{
      errors: errors ? errors : null,
      oldData: oldData ? oldData : null,
      userData: req.session.userData ? req.session.userData : null
    });
  },
  // Acción de Login
  login: (req, res) => {
    const authentication = userService.authentication(req.body.email,req.body.password)
    if(authentication){
      req.session.userData =  authentication
      console.log(authentication)
      res.redirect("/")
    }else{
      console.log(authentication)
    }
  },

  // Vista formulario de creación de usuario
  showRegister: (req, res) => {
    const errors = req.session.errors;
    const oldData = req.session.oldData;
    req.session.errors = null;
    req.session.oldData = null;
    res.render('register', {
      errors: errors ? errors : null,
      oldData: oldData ? oldData : null,
      userData: req.session.userData ? req.session.userData : null
    });
  },

  // Acción de creación (a donde se envía el formulario)    
  register: (req, res) => {
    console.log(req.body);
    let password = userService.encryptedPassword(req.body.password)
    const user = {
    firstName: req.body.name,
    lastName: req.body.surname,
    email: req.body.email,
    birthDay: req.body.birthDay,
    address: req.body.address,
    buildtype: req.body.buildtype,
    zipcode: req.body.zipcode,
    password: password,
    category: "admin",
    image: req.file ? req.file.filename : 'default_user.png' 
    };
    console.log("Users-controler user:", user);
    userService.createUser(user);
    res.redirect("/users/login");  
  },

  // Acción de logout
  logout: (req, res) => {
    req.session.destroy();
    res.redirect('/users/login');
  },

  // Acción de edición (a donde se envía el formulario):   
  update: (req, res) => {
    const id = req.params.id;
    if(req.body.password) {
       let passwordNew = userService.encryptedPassword(req.body.password)
       let {password,...data} = req.body
       let newData = { 
        ...data,
        password : passwordNew,
      }
       userService.updateUser(newData,id)

    }else {
      let {password,confirmPassword,...data} = req.body
      userService.updateUser(data,id)
    }

    res.redirect(`/users/edit/${id}`)
  },
  // Acción de borrado de un usuario en la BD
  delete: (req, res) => {
  },
}



