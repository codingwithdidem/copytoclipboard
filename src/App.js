import React, { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
import './App.css';
import { useCopyToClipboard } from './lib/useCopyToClipboard';

const App = () => {
  const [isCopied, copyToClipboard] = useCopyToClipboard({
    debug: true,
    message: 'Press #{x} to copy',
    interval: 3000,
  });

  const code = `
     const coffee = new Coffee();
     console.log('Here is your coffee', coffee)
  `;

  const code2 = `
  const donut = new Donut();
  console.log('Here is your donut', donut)
`;
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className='App'>
      <div className='main'>
        <pre>
          <code className='language-javascript'>{code}</code>
        </pre>
        <button className='copy' onClick={() => copyToClipboard(code)}>
          {isCopied ? 'Copied' : 'Copy'}
        </button>
      </div>

      <div className='main'>
        <pre>
          <code className='language-javascript'>{code}</code>
        </pre>
        <button className='copy' onClick={() => copyToClipboard(code2)}>
          {isCopied ? 'Copied' : 'Copy'}
        </button>
      </div>
    </div>
  );
};

export default App;
