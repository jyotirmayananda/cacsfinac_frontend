// API Configuration
// This file centralizes all API endpoint URLs

// Backend API Base URL
// Production: https://cacsfinac-backend.onrender.com
// Local development: http://localhost:5000
const getApiBaseUrl = () => {
  // Check if we're in production (browser environment)
  const isProduction = typeof window !== 'undefined' && 
    (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1');
  
  // Use environment variable if set, otherwise use production URL in production
  if (process.env.NEXT_PUBLIC_API_URL) {
    return process.env.NEXT_PUBLIC_API_URL;
  }
  if (process.env.NEXT_PUBLIC_BACKEND_URL) {
    return process.env.NEXT_PUBLIC_BACKEND_URL;
  }
  
  // Default to production URL
  return 'https://cacsfinac-backend.onrender.com';
};

const API_BASE_URL = getApiBaseUrl();

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

