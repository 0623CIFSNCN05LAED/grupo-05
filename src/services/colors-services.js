const dataColors = require("../data/colors");

module.exports = {
    colors : dataColors,
    listName : function () {
        return this.colors.map((color) => color.name)  
    },
    findId : function(id){
        let idFound = this.colors.find((color) => color.id == id);

        if (idFound) {
            return idFound;
          } else {
            return null;
          }


    } ,
    listColors : function () {
      return this.colors
    }

}

