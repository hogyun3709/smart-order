import BaseClient from '@/api/BaseClient';

export default class SignInApi {
  constructor(clientInstance) {
    this.clientInstance = clientInstance || new BaseClient().instance;
  }

  async createUser(payload) {
    const result = await this.clientInstance.post('/join', payload);
    return result;
  }
}
