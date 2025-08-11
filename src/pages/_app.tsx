import "@/styles/globals.css";
import { AppProps } from 'next/app';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (<>
      <ToastContainer theme="colored" />
      <Component {...pageProps} />
    </>);
}