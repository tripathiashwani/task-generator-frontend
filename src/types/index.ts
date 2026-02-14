export interface Spec {
  id: string;
  title: string;
  goal: string;
  users?: string;
  constraints?: string;
  template_type?: string;
  tasks_markdown: string;
  created_at: string;
}

export interface GenerateRequest {
  title?: string;
  goal: string;
  users?: string;
  constraints?: string;
  template_type?: string;
}

export interface HealthResponse {
  backend: string;
  llm_configured: boolean;
}
