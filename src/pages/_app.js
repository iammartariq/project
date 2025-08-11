import "@/styles/globals.css";
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';

export default function MyApp({ Component, pageProps }) {
  return (<>
      <ToastContainer theme="colored" />
      <Component {...pageProps} />
    </>);
}
