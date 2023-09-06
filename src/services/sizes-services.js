const datasizes = require("../data/sizes");

module.exports = {
    sizes : datasizes,
    listName : function () {
        return this.sizes.map((size) => size.name)  
    },
    findId : function(id){
        let idFound = this.sizes.find((size) => size.id == id);

        if (idFound) {
            return idFound;
          } else {
            return null;
          }
    } ,
    listsizes : function () {
      return this.sizes
    }

}
