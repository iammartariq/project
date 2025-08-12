import "@/styles/globals.css";
import 'react-toastify/dist/ReactToastify.css';
import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { ToastContainer } from 'react-toastify';
import client from '@/lib/apollo-client';
import ErrorBoundary from '@/components/ErrorBoundary';
import ConnectionTester from '@/components/ConnectionTester';

export default function MyApp({ Component, pageProps }: AppProps) {
  const isDevelopment = process.env.NODE_ENV === 'development';
  
    <ErrorBoundary>
      <ApolloProvider client={client}>
        <NetworkStatus />
        {isDevelopment && <ConnectionTester />}
        <ToastContainer 
          theme="colored" 
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Component {...pageProps} />
      </ApolloProvider>
    </ErrorBoundary>
  );
}