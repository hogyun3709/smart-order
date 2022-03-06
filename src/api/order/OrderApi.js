import OAuthHttpClient from '../OAuthHttpClient';

export default class OrderApi {
  constructor(clientInstance) {
    this.clientInstance = clientInstance || new OAuthHttpClient().instance;
  }

  async createOrder() {
    const result = await this.clientInstance.post('/order');
    return result;
  }
}
