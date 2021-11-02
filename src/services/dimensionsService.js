import api from 'axios'

export default class CardService {
  url = "http://localhost:8000/api/v1";

  findAll() {
    return api.get(`${this.url}/dimensions/`);
  }

  findById(id) {
    return api.get(`${this.url}/dimensions/${id}`);
  }

  create(item) {
    return api.post(`${this.url}/dimensions`, item);
  }

  update(id, item) {
    return api.put(`${this.url}/dimensions/${id}`, item);
  }

  delete(id, item) {
    return api.put(`${this.url}/dimensions/${id}`, item);
  }

}