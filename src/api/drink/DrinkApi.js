import OAuthHttpClient from '../OAuthHttpClient';

export default class DrinkApi {
  constructor(clientInstance) {
    this.clientInstance = clientInstance || new OAuthHttpClient().instance;
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
