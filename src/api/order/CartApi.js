import BaseClient from '@/api/BaseClient';

export default class CartApi {
  constructor(client = undefined) {
    this.client = client || new BaseClient();
  }

  async addItemToCart(payload) {
    const result = await this.client.instance.post('/cart', payload);
    return result;
  }

  async getProductsInCart() {
    const result = await this.client.instance.get('/cart');
    return result;
  }
}
