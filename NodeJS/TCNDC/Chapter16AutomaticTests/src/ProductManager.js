const ProductsClient = require('./ProductsClient')

class ProductManager {
    async getProductToManage(id) {
      const productsClient = new ProductsClient();
      const productToManage = await productsClient.getById(id)
        .catch(err => alert(err));
      return productToManage;
    }
  }

  module.exports = ProductManager