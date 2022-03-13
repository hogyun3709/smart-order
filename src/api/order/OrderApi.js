import BaseClient from '@/api/BaseClient';

export default class OrderApi {
  constructor(client = undefined) {
    this.client = client || new BaseClient();
  }

  async createOrder() {
    const result = await this.client.instance.post('/order');
    return result;
  }
}
