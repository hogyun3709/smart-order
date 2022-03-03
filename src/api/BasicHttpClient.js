import axios from 'axios';

export default class BasicClient {
  constructor() {
    const baseURL = 'https://taling.projectlion.lkaybob.pe.kr/api';
    const auth = { username: 'web-app', password: 'abcd1234' };

    this.instance = axios.create({
      baseURL,
      auth,
    });
  }
}
