import api from 'axios'

export default class CardService {
  url = "http://localhost:8000/api/v1";

  findAll(filter) {
    var card = parseInt(filter);
    if (isNaN(card)) {
      return api.get(`${this.url}/questions/`);
    } else {
      return api.get(`${this.url}/questions/filter/${filter}`);
    }    
  }

  findById(id) {
    return api.get(`${this.url}/questions/${id}`);
  }

  create(item) {
    return api.post(`${this.url}/questions`, item);
  }

  update(id, item) {
    return api.put(`${this.url}/questions/${id}`, item);
  }

  delete(id, item) {
    return api.put(`${this.url}/questions/${id}`, item);
  }


}