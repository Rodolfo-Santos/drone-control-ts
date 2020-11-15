import { http } from './config';

export default {
  listar: (limit: string | null, query: string | null) => {
    if (limit === null) { limit = ''; } else { limit = `_limit=${limit}&`; }
    return http.get(`drones/?${limit}${query}`);
  },

  drone_unico: (id: number) => {
    return http.get(`drones/${id}`);
  },

  adicionar: (drone: object) => {
    return http.post(`drones`, drone);
  },

  deletar: (id: number) => {
    return http.delete(`drones/${id}`);
  },
};
