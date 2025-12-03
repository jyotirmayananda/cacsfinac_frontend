// API Configuration
// This file centralizes all API endpoint URLs

// Backend API Base URL
// For local development, use: http://localhost:5000
// For production, replace with your Render URL: https://your-app.onrender.com
const API_BASE_URL = 
  process.env.NEXT_PUBLIC_API_URL || 
  process.env.NEXT_PUBLIC_BACKEND_URL || 
  'http://localhost:5000';

// API Endpoints
export const API_ENDPOINTS = {
  // Authentication
  SIGNUP: `${API_BASE_URL}/api/auth/signup`,
  SIGNIN: `${API_BASE_URL}/api/auth/signin`,
  
  // Forms
  SUBMIT_FORM: `${API_BASE_URL}/api/forms/submit`,
  
  // Health check
  HEALTH: `${API_BASE_URL}/health`,
};

// Helper function to make API calls
export async function apiCall(
  endpoint: string,
  options: RequestInit = {}
): Promise<Response> {
  const defaultHeaders: HeadersInit = {
    'Content-Type': 'application/json',
  };

  // Add auth token if available
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('authToken');
    if (token) {
      defaultHeaders['Authorization'] = `Bearer ${token}`;
    }
  }

  const response = await fetch(endpoint, {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  });

  return response;
}

// Export the base URL for direct use if needed
export default API_BASE_URL;

