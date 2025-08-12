import "@/styles/globals.css";
import 'react-toastify/dist/ReactToastify.css';
import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { ToastContainer } from 'react-toastify';
import client from '@/lib/apollo-client';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
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
  );
}