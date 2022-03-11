import BaseClient from '@/api/BaseClient';

export default class DrinkApi {
  constructor(clientInstance) {
    this.clientInstance = clientInstance || new BaseClient().instance;
  }

  async getProducts() {
    const result = await this.clientInstance.get('/product');

    return result;
  }

  async getProductDetail(productNo) {
    const result = await this.clientInstance.get(`/product/${productNo}`);

    return result;
  }
}
