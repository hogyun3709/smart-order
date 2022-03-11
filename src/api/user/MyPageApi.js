import BaseClient from '@/api/BaseClient';

export default class MyPageApi {
  constructor(clientInstance) {
    this.clientInstance = clientInstance || new BaseClient().instance;
  }

  async getUserInfo() {
    const result = await this.clientInstance.get('/info');
    return result;
  }
}
