import BaseClient from '@/api/BaseClient';
import store from '@/store';

export default class LogInApi {
  constructor(client = undefined) {
    this.client = client || new BaseClient();
  }

  async login(username, password) {
    const response = await this.client.instance.post(
      '/login',
      {
        grant_type: 'password',
        username,
        password,
      },
    );

    if (response.status === 200) {
      store.dispatch('setToken', response.data.access_token);
      this.client.ACCESS_TOKEN = store.state.access_token;

      return true;
    }
    return false;
  }
}
