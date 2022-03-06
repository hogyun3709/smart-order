import axios from 'axios';

export default class OAuthClient {
  constructor() {
    const baseURL = 'https://taling.projectlion.lkaybob.pe.kr/api';
    const token = '7DG0aCAMHsdn6927R9FiOuDdTNHbDWz1LRPksLvZ9a7eLvOZBvPfqF5fn0vIx3OZNyuEX25YANPUimJrndeuKxrGbRVq4fS8dls0sNRmmedmf3ESnfoEV7PcT16Q5H6QhbfaBVkqScCoAUis5XPoJraYmWtGEddWJpgqxfTPzxArzArbVuUGypBG0NGziCDygBLU50iJAhZnISI0OIxHv1Artzal1VUintClhW4JBsUDJK58ccrzjwxdVU4AGAj6';

    this.instance = axios.create({
      baseURL,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
