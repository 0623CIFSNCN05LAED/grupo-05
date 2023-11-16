const userService = require("../services/user-services");
const buildTypesServicesDB = require("../services/buildtypes-services");

module.exports = {
  // Vista listado de usuarios 
  userList: async (req, res) => {
    const allUsers = await userService.getAllUsers();
    console.log(allUsers);
    // res.render('user-list', {users: userService.getAllusers()});*/
    res.send('user-list');

  },
  // Vista detalle de un usuario
  userDetail: async (req, res) => {
    const id = req.params.id;
    const user = await userService.getUser(id);
      res.render('user-detail', { 
        user,
        userData: req.session.userData ? req.session.userData : null });
  },
  // Vista formulario de edición de un usuario
  userEdit: async (req, res) => {
    const id = req.params.id;
    const errors = req.session.errors;
    const user = await userService.getUser(id);
    const allBuildTypes = await buildTypesServicesDB.listBuildTypes();

    res.render('edit-user', {
      userData: req.session.userData,
      user: user,
      buildTypeList: allBuildTypes,
      errors: errors ? errors : null,
    })
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
  login: async (req, res) => {
    const authorizedUser = await userService.authentication(req.body.email,req.body.password)
    console.log('authorizedUser: '+ authorizedUser);
    if(authorizedUser){
      req.session.userData =  authorizedUser;
      res.redirect("/")
    }else{
      req.session.errors = {login:{msg:"Email o contraseña incorrecta"}}
      res.redirect("/users/login")
    }
  },

  // Vista formulario de creación de usuario
  showRegister: async (req, res) => {
    const errors = req.session.errors;
    const oldData = req.session.oldData;
    const allBuildTypes = await buildTypesServicesDB.listBuildTypes();
    req.session.errors = null;
    req.session.oldData = null;
    res.render('register', {
      errors: errors ? errors : null,
      oldData: oldData ? oldData : null,
      buildTypeList: allBuildTypes,
      userData: req.session.userData ? req.session.userData : null
    });
  },

  // Acción de creación (a donde se envía el formulario)    
  register: (req, res) => {
    userService.saveInDb(req.body, req.file)
      .then(()=>{
        res.redirect("/users/login")
      })
  },

  // Acción de logout
  logout: (req, res) => {
    req.session.destroy();
    res.redirect('/users/login');
  },

  // Acción de edición (a donde se envía el formulario):   
  update: (req, res) => {
    const file = req.file;
    const id = req.params.id;
    if(req.body.password) {
       let passwordNew = req.body.password;
       let {password,...data} = req.body
       let newData = { 
        ...data,
        password : passwordNew,
      }
       userService.updateUser(newData,id,file)

    }else {
      let {password,confirmPassword,...data} = req.body
      userService.updateUser(data,id,file)
    }

    res.redirect(`/users/detail/${id}`)
  },
  // Acción de borrado de un usuario en la BD
  delete: (req, res) => {
    const id = req.params.id;
    userService.deleteUser(id);
    req.session.destroy();
    res.redirect("/users/login");
  },
}



