import axios from "axios";
import type { GenerateRequest, Spec, HealthResponse } from "../types";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL, 
});

export const generateSpec = async (data: GenerateRequest) => {
  return API.post<{ id: string; tasks: string }>("/generate/", data);
};

export const getLastSpecs = async () => {
  return API.get<Spec[]>("/specs/");
};

export const getHealth = async () => {
  return API.get<HealthResponse>("/health/");
};
