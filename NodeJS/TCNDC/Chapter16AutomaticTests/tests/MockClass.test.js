
const ProductManager = require('../src/ProductManager')
const ProductsClient = require('../src/ProductsClient')

jest.mock('../src/ProductsClient');
//we need to assign a mock function to the ProductsClient's 'getById' method. However, as we are using ES6 class syntax, 
//its not quite as simple as assigning it to 'ProductsClient.getById', we need to assign it to the object's prototype.
/*const mockGetById = jest.fn();
ProductsClient.prototype.getById = mockGetById;*/
//To Mock getById(id)

test('should return the product', async () => {
    const expectedProduct = {
      id: 1,
      name: 'football',
    };    
    const productManager = new ProductManager();
    //mock the response to obtain our result
    const mockGetById = jest.fn();
    ProductsClient.prototype.getById = mockGetById;
    mockGetById.mockReturnValue(Promise.resolve(expectedProduct));

    const result = await productManager.getProductToManage(1); 
  
    expect(result.name).toBe('football');
  });

test('return a different product', async () => {
    const expectedProduct = {
      id: 2,
      name: 'basket',
    };    
    const productManager = new ProductManager();
    //mock the response to obtain our result
    const mockGetById = jest.fn();
    ProductsClient.prototype.getById = mockGetById;
    mockGetById.mockReturnValue(Promise.resolve(expectedProduct));

    const result = await productManager.getProductToManage(1); 
  
    expect(result.name).toBe('basket');
    expect(result).toMatchObject({
        name : 'basket',
        id:2
      })
    console.log(result)

});
 