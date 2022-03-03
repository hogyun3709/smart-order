import OAuthHttpClient from '../OAuthHttpClient';

export default class MyPageApi {
  constructor(clientInstance) {
    this.clientInstance = clientInstance || new OAuthHttpClient().instance;
  }

  async getUserInfo() {
    const result = await this.clientInstance.get('/info');
    return result;
  }
}
