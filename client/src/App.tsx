import React from 'react';
import { Links } from './components/Links';
import { FormAction } from './components/FormAction';
import { createLink, redirectLink } from './helpers/api';

function App() {
  return (
    <>
      <h2 style={{ textAlign: 'center' }}>Link Shortener</h2>
      <div
        style={{
          display: 'flex',
          height: '100vh',
          width: '100%',
          justifyContent: 'space-evenly',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#bb86fc',
            width: '50%',
            height: '100%',
          }}
        >
          <FormAction type={'redirect'} onSubmit={redirectLink} />
          <FormAction type={'create'} onSubmit={createLink} />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#1b8175',
            width: '50%',
            overflow: 'scroll',
          }}
        >
          <Links />
        </div>
      </div>
    </>
  );
}

export default App;
