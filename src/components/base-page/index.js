import React from 'react';
import Helmet from 'react-helmet';
import './base-page.css';

export const BasePage = ({ title, description, children }) => {
  return (
    <section>
      <Helmet>
        <title>React Course in MFT - {title}</title>
        <meta name='description' content={description} />
      </Helmet>
      <h2 className='page-title'>
        <span>{title}</span>
      </h2>
      {children}
    </section>
  );
};
