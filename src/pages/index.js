import React from 'react';
import { Helmet } from 'react-helmet';

import App from '../components/App';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Giuseppe Barbato | Passionate Software Engineer</title>
        <html lang='en' />
        <meta name="description" content='Passionate software engineer, who loves to build meaningful software' />
        <meta name="theme-color" content="#234e70" />
      </Helmet>
      <App />
    </>
  );
};
