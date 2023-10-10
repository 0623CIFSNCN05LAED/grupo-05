// ** Requires's ----------------------------------------------------------------------------------------------
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require("uuid");

module.exports = {
    getUsers: function () {
        const usersFilePath = path.join(__dirname, "./usersDB.json");
        const users = JSON.parse(fs.readFileSync(usersFilePath,"utf-8"));
        return users;
      },
    getUserById: function(id) {
      const users = this.getUsers()
      const userId = users.find((user) => user.id === id)
      return userId != undefined ? userId : false
    },
    getUserByEmail: function (email) {
      const users = this.getUsers()
      const userEmail = users.find((user) => user.email === email)
      return userEmail != undefined ? userEmail : false
    },

    saveUsers: function (users) {
      const usersFilePath = path.join(__dirname, "./usersDB.json");
      fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
    },
    update: function (user) {
      const users = this.getUsers();
      
      const updatedUsers = users.map(u => {
          if(u.id === user.id) {
              return { ...u, ...user };
          }
          return u;
      });
  
      this.saveUsers(updatedUsers);
  }
    ,
    createUser: function (users) {
        console.log(`Creating user ${users.nameFirst} ${users.nameLast}`);
        const usersDB = this.getUsers();
        const newUser = {
          id: uuidv4(),
          ...users,
        };
        usersDB.push(newUser);
        this.saveUsers(usersDB);
      },
    };
