import BaseClient from '@/api/BaseClient';

export default class OrderApi {
  constructor(clientInstance) {
    this.clientInstance = clientInstance || new BaseClient().instance;
  }

  async createOrder() {
    const result = await this.clientInstance.post('/order');
    return result;
  }
}
