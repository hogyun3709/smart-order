import BaseClient from '@/api/BaseClient';

export default class CartApi {
  constructor(clientInstance) {
    this.clientInstance = clientInstance || new BaseClient().instance;
  }

  async addItemToCart(payload) {
    const result = await this.clientInstance.post('/cart', payload);
    return result;
  }

  async getProductsInCart() {
    const result = await this.clientInstance.get('/cart');
    return result;
  }
}
