// stores/authStore.ts
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface AuthState {
  user: User | null;
  loading: boolean;
  isAuthenticated: boolean;
  error: string | null;
  login: (user: User) => void;
  logout: () => void;
  checkAuthenticate: (user: User) => void;
}

interface User {
  id: string;
  fullName: string;
  email: string;
  authToken?: string;
  about?: string;
  companies?: string;
  createdAt?: string;
  currentPeriodEnd?: string;
  currentPeriodStart?: string;
  customUrl?: string;
  firstName?: string;
  imdbUrl?: string;
  instagramUrl?: string;
  lastName?: string;
  linkedinUrl?: string;
  phone?: string;
  planName?: string;
  planPrice?: string;
  planInterval?: string;
  primaryGoal?: string;
  profilePhoto?: string;
  subscriptionStatus?: string;
  supportEmail?: string;
  twitterUrl?: string;
  updatedAt?: string;
  websiteUrl?: string;
  stripeId?: string;
}

export const useAuthStore = create<AuthState>()(
  immer((set, get) => ({
    user: null,
    loading: false,
    isAuthenticated: false,
    error: null,

    login: (user) => {
      if(user){
        set({ 
          user,
          isAuthenticated: true,
          loading: false 
        });
      }else{
        set({ loading: true, error: null }); 
      }
    },

    logout: () => {
      localStorage.removeItem('authToken');
      set({ 
        user: null,
        isAuthenticated: false 
      });
    },

    checkAuthenticate: (user) => {
      if(user){
        set({ loading: true });
        try {    
          set({
            user: user,
            isAuthenticated: !!user,
            loading: false,
          });
        } catch (error) {
          get().logout();
          set({ loading: false });
        }
      }
    },
  }))
);