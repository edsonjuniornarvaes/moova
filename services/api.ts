/**
 * Configuração base da API
 * Centraliza a configuração do cliente HTTP
 */

const API_BASE_URL = process.env.EXPO_PUBLIC_API_URL || "https://api.example.com";

interface RequestConfig {
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  headers?: Record<string, string>;
  body?: any;
}

class ApiService {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  private async request<T>(
    endpoint: string,
    config: RequestConfig = {}
  ): Promise<T> {
    const { method = "GET", headers = {}, body } = config;

    const url = `${this.baseURL}${endpoint}`;

    const requestHeaders: HeadersInit = {
      "Content-Type": "application/json",
      ...headers,
    };

    // Adicione token de autenticação aqui se necessário
    // const token = await getAuthToken();
    // if (token) {
    //   requestHeaders.Authorization = `Bearer ${token}`;
    // }

    const requestConfig: RequestInit = {
      method,
      headers: requestHeaders,
    };

    if (body && method !== "GET") {
      requestConfig.body = JSON.stringify(body);
    }

    try {
      const response = await fetch(url, requestConfig);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data as T;
    } catch (error) {
      console.error("API request failed:", error);
      throw error;
    }
  }

  async get<T>(endpoint: string, headers?: Record<string, string>): Promise<T> {
    return this.request<T>(endpoint, { method: "GET", headers });
  }

  async post<T>(
    endpoint: string,
    body?: any,
    headers?: Record<string, string>
  ): Promise<T> {
    return this.request<T>(endpoint, { method: "POST", body, headers });
  }

  async put<T>(
    endpoint: string,
    body?: any,
    headers?: Record<string, string>
  ): Promise<T> {
    return this.request<T>(endpoint, { method: "PUT", body, headers });
  }

  async patch<T>(
    endpoint: string,
    body?: any,
    headers?: Record<string, string>
  ): Promise<T> {
    return this.request<T>(endpoint, { method: "PATCH", body, headers });
  }

  async delete<T>(
    endpoint: string,
    headers?: Record<string, string>
  ): Promise<T> {
    return this.request<T>(endpoint, { method: "DELETE", headers });
  }
}

export const api = new ApiService(API_BASE_URL);

