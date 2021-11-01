import api from 'axios'

export default class CardService {
  url = "http://localhost:8000/api/v1";

  findAll() {
    return api.get(`${this.url}/dimensions/`);
  }

}