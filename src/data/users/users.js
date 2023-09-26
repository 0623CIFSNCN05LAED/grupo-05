// ** Requires's ----------------------------------------------------------------------------------------------
const fs = require('fs');
const path = require('path');

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
        const users = this.getUSers();
        const newUser = {
          id: uuidv4(),
          ...user,
        };
        users.push(newuser);
        this.saveUsers(users);
      },
    };
