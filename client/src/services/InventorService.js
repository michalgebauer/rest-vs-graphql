import axios from 'axios';
import { request } from 'graphql-request';

export class InventorService {
  static getInventorREST(id) {
    return axios
      .all([
        axios.get(`/inventors/${id}`),
        axios.get(`/inventors/${id}/patents`),
      ])
      .then(
        axios.spread((inventorResponse, patentResponse) => {
          const inventor = inventorResponse.data;
          inventor.patents = patentResponse.data._embedded.patents;
          return inventor;
        })
      );
  }

  static getInventorREST_CUSTOM(id) {
    return axios
      .get(`/inventors/${id}?projection=inventorDetail`)
      .then(response => response.data);
  }

  static getInventorGRAPHQL(id) {
    const query = `{
      inventor(id: ${id}) {
        id
        firstname
        lastname
        nationality
        born
        died
        patents {
          year
          name
          description
        }
      }
    }`;

    return request('/graphql', query).then(data => data.inventor);
  }

  static getInventorsREST() {
    return axios
      .get('/inventors')
      .then(response => response.data._embedded.inventors);
  }

  static getInventorsREST_CUSTOM() {
    return axios
      .get('/inventors?projection=inventorList')
      .then(response => response.data._embedded.inventors);
  }

  static getInventorsGRAPHQL() {
    const query = `{
      inventors {
        id
        firstname
        lastname
        nationality
      }
    }`;

    return request('/graphql', query).then(data => data.inventors);
  }

  static deleteInventorREST(id) {
    return axios.delete(`/inventors/${id}`);
  }

  static deleteInventorREST_CUSTOM(id) {
    return this.deleteInventorREST(id);
  }

  static deleteInventorGRAPHQL(id) {
    const query = `mutation {
      deleteInventor(id: ${id}) 
    }`;

    return request('/graphql', query);
  }

  static createInventorREST(inventor) {
    return axios.post('/inventors', inventor).then(response => response.data);
  }

  static createInventorREST_CUSTOM(inventor) {
    return this.createInventorREST(inventor);
  }

  static createInventorGRAPHQL(inventor) {
    const query = `mutation {
      newInventor(
        firstname: "${inventor.firstname}",
        lastname: "${inventor.lastname}",
        nationality: "${inventor.nationality}"
      ) {
        id
      } 
    }`;

    return request('/graphql', query).then(data => data.newInventor);
  }

  static updateInventorREST(inventor) {
    return axios
      .put(`/inventors/${inventor.id}`, inventor)
      .then(response => response.data);
  }

  static updateInventorREST_CUSTOM(inventor) {
    return this.updateInventorREST(inventor);
  }

  static updateInventorGRAPHQL(inventor) {
    const query = `mutation {
      updateInventor(
        id: ${inventor.id},
        firstname: "${inventor.firstname}",
        lastname: "${inventor.lastname}",
        nationality: "${inventor.nationality}"
      ) {
        id
      }
    }`;

    return request('/graphql', query).then(data => data.newInventor);
  }
}
