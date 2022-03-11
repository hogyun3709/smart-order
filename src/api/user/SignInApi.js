import BasicHttpClient from '../BasicHttpClient';

export default class SignInApi {
  constructor(clientInstance) {
    this.clientInstance = clientInstance || new BasicHttpClient().instance;
  }

  async createUser(payload) {
    const result = await this.clientInstance.post('/join', payload);
    return result;
  }
}
