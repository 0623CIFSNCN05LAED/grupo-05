const dataColors = require("../data/colors");

module.exports = {
    colors : dataColors,
    listName : function () {
        return this.colors.map((color) => color.name)  
    },
    findById : function(id){
        let idFound = this.colors.find((color) => color.id == id);

        if (idFound) {
            return idFound;
          } else {
            return null;
          }
    } ,
    findByName : function(name){
      let nameFound = this.colors.find((color) => color.name == name);

      if (nameFound) {
          return nameFound;
        } else {
          return null;
        }
  } ,

    listColors : function () {
      return this.colors
    }

}
