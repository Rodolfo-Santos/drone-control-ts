import { http } from './config';
import Drone from '@/models/Drone';

export default {
  listar: (limit: number | null, query: string | null) => {
    let limitQuery: string;
    if (limit === null) { limitQuery = ''; } else { limitQuery = `_limit=${limit}&`; }
    return http.get(`drones/?${limit}${query}`);
  },

  drone_unico: (id: number) => {
    return http.get(`drones/${id}`);
  },

  adicionar: (drone: Drone) => {
    return http.post(`drones`, drone);
  },

  deletar: (id: number) => {
    return http.delete(`drones/${id}`);
  },

  atualizar: (id: number, drone: Drone) => {
    return http.put(`drones/${id}`, drone);
  },
};
