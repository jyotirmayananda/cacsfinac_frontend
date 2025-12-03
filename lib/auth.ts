// Auth utility functions
// Helper functions for managing authentication state

export interface User {
  id?: string;
  fullName: string;
  email: string;
}

export const getStoredUser = (): User | null => {
  if (typeof window === "undefined") return null;
  
  try {
    const userData = localStorage.getItem("userData");
    const authToken = localStorage.getItem("authToken");
    
    if (userData && authToken) {
      return JSON.parse(userData);
    }
  } catch (error) {
    console.error("Error reading user from localStorage:", error);
  }
  
  return null;
};

export const setStoredUser = (user: User, token: string): void => {
  if (typeof window === "undefined") return;
  
  localStorage.setItem("userData", JSON.stringify(user));
  localStorage.setItem("authToken", token);
  
  // Dispatch events to notify components
  window.dispatchEvent(new CustomEvent("userLogin", { 
    detail: user,
    bubbles: true 
  }));
  window.dispatchEvent(new CustomEvent("authStateChange"));
  window.dispatchEvent(new Event("storage"));
};

export const clearStoredUser = (): void => {
  if (typeof window === "undefined") return;
  
  localStorage.removeItem("userData");
  localStorage.removeItem("authToken");
  
  // Dispatch events to notify components
  window.dispatchEvent(new CustomEvent("authStateChange"));
  window.dispatchEvent(new Event("storage"));
};

export const isAuthenticated = (): boolean => {
  if (typeof window === "undefined") return false;
  return !!(localStorage.getItem("userData") && localStorage.getItem("authToken"));
};

