import BaseClient from '@/api/BaseClient';

export default class DrinkApi {
  constructor(client = undefined) {
    this.client = client || new BaseClient();
  }

  async getProducts() {
    const result = await this.client.instance.get('/product');

    return result;
  }

  async getProductDetail(productNo) {
    const result = await this.clientInstance.get(`/product/${productNo}`);

    return result;
  }
}
