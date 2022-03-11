import BaseClient from '@/api/BaseClient';

export default class MyPageApi {
  constructor(client = undefined) {
    this.client = client || new BaseClient();
  }

  async getUserInfo() {
    const result = await this.client.instance.get('/info');
    return result;
  }
}
