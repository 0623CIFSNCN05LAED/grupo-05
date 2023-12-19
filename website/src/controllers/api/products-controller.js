const productService = require("../../services/product-services");
const path = require("path");
const pageSize = 10

module.exports = {
  list_page:async (req, res) => {
    const page = Number(req.query.page) || 1;
    const offset = (page - 1) * pageSize;
    console.log('offset', offset);
    const {count, rows} = await productService.getAllproductsAndCount({
        pageSize, offset
    })
    const totalNumberOfProducts = await productService.getTotalNumberOfProducts();
    const totalProductsByCategory = await productService.getTotalProductsByCategory();

    res.json({
        meta: {
            status: 200,
            total: totalNumberOfProducts,
            totalsByCategory: totalProductsByCategory,
            url: req.originalUrl, 
            nextPage: `${req.originalUrl.split('?')[0]}?page=${page+1}`
        }, 
        data: rows
    })
  },
  list: async (req, res) => {
    const products = await productService.getAllProductsOverview();
    const totalProductsByCategory = await productService.getTotalProductsByCategory();

    const apiProducts = products.map((product) =>{
      console.log(product.is_active)
      return {
        id: product.id,
        name: product.name,
        description: product.description,
        colors: product.colors,
        sizes: product.sizes,
        active: product.is_active,
        detail: req.headers.host + req.originalUrl + "/" + product.id,
      };
    });

    res.json({
        meta: {
            status: 200,
            total: products.lenght,
            totalsByCategory: totalProductsByCategory,
            url: req.originalUrl
        }, 
        data: apiProducts 
    })
  },  
  detail: async(req, res) => {
    const product = await productService.getProduct(req.params.id);
    const pathImage = path.resolve(__dirname,"../../../public/images/products");
    const urlImage = pathImage + "\\" + product.image;
    
    const apiProduct = {
      product: product,
      urlImage: urlImage
    };

    res.json({
      meta: {
        status: 200,
        data: apiProduct,
        url: req.originalUrl
      },
    });
  },
  last: async(req, res) => {
    const response = await productService.getLastProduct();
    const id = response.map((atribute) => {
      return atribute.id
    }
    )
    console.log(req)
    res.json({
      meta: {
        status: 200,
        id: id[0],
        url: req.originalUrl,
        urlDetail: req.headers.host + req.baseUrl + "/detail/" +id[0],
      },
    });
  },
  // Acción de borrado de un producto en la BD
  delete: (req, res) => {
    const id = req.params.id;
    productService.deleteProduct(id);
    res.send({message :"Eliminado con exito",status: 200})
  },
};
