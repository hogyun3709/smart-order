import BasicHttpClient from './BasicHttpClient';

export default class MyPageApi {
  constructor(clientInstance) {
    this.clientInstance = clientInstance || new BasicHttpClient().instance;
  }

  async getUserInfo() {
    const result = await this.clientInstance.get('/info');
    return result;
  }
}
