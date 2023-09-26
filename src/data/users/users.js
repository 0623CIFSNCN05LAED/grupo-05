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
    saveUsers: function (users) {
      const usersFilePath = path.join(__dirname, "./usersDB.json");
      fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
    },
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
