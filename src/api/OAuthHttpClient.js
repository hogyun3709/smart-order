import axios from 'axios';

export default class OAuthClient {
  constructor() {
    const baseURL = 'https://taling.projectlion.lkaybob.pe.kr/api';
    const token = 'VmHU1EZl1nyuw1XqP3KgKQR136ju3bdYwowoXRUFeCYhL1LvNTgTCQijuVDRKDoqSk1wY2Fzl2shsLabuSKo5jb23s1PTnY6Hjxnz3UV0SwHPTee5NSUIeIXeynxwvce0Rkk8UoNPVsMFeMA0TRjQFIlEhRyOiYiLXcKg2Wa7W35qcp6YbwrUnzQPQ8DdvRC4MzyvMu2PgEq2pVYpz43C2bXbFuRUp3pAhJcb8umHt65HTaSj5ryWjPbqv6FvrQs';

    this.instance = axios.create({
      baseURL,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
