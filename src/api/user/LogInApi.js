import BaseClient from '@/api/BaseClient';

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
      this.client.ACCESS_TOKEN = response.data.access_token;
      return true;
    }
    return false;
  }
}
