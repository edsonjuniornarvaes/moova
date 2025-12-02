/**
 * Serviço de usuário
 * Exemplo de como criar serviços para diferentes recursos da API
 */

import { api } from "./api";

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface CreateUserDto {
  name: string;
  email: string;
  password: string;
}

export interface UpdateUserDto {
  name?: string;
  email?: string;
  avatar?: string;
}

export const userService = {
  /**
   * Busca todos os usuários
   */
  getAll: async (): Promise<User[]> => {
    return api.get<User[]>("/users");
  },

  /**
   * Busca um usuário por ID
   */
  getById: async (id: string): Promise<User> => {
    return api.get<User>(`/users/${id}`);
  },

  /**
   * Cria um novo usuário
   */
  create: async (data: CreateUserDto): Promise<User> => {
    return api.post<User>("/users", data);
  },

  /**
   * Atualiza um usuário
   */
  update: async (id: string, data: UpdateUserDto): Promise<User> => {
    return api.put<User>(`/users/${id}`, data);
  },

  /**
   * Deleta um usuário
   */
  delete: async (id: string): Promise<void> => {
    return api.delete<void>(`/users/${id}`);
  },
};

