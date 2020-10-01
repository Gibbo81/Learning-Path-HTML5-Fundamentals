
class ProductsClient {
    async getById(id) {
      const url = `http://localhost:3000/api/products/{id}`;
      const response = await fetch(url);
      return await response.json();
    }
  }

module.exports = ProductsClient