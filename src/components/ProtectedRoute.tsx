'use client';

import { useEffect, ReactNode } from 'react';
import { useRouter } from 'next/router';
import { useAuthStore } from '@/stores/authStore';
import { checkAuth } from '@/services/auth-service';

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {

  const { checkAuthenticate, isAuthenticated, loading } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      checkAuthentication();
    }
  }, [isAuthenticated, loading, router]);

  const checkAuthentication = async () => {
    await checkAuth().then((result)=>{
      if(!result.user && result.errors){
        router.push('/');
      }else{
        checkAuthenticate(result.user);
      }
    });
  };

  if (loading || !isAuthenticated) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
}

export default ProtectedRoute;
