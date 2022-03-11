import BaseClient from '@/api/BaseClient';

export default class SignInApi {
  constructor(client = undefined) {
    this.client = client || new BaseClient();
  }

  async createUser(payload) {
    const result = await this.client.instance.post('/join', payload);
    return result;
  }
}
