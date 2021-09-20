import React from 'react';
import { useCopyToClipboard } from '../lib/useCopyToClipboard';

const Clipboard = ({ copyText }) => {
  const [isCopied, copyToClipboard] = useCopyToClipboard({
    debug: true,
    message: 'Press #{x} to copy',
    interval: 3000,
  });
  return (
    <div className='main'>
      <pre>
        <code className='language-javascript'>{copyText}</code>
      </pre>
      <button className='copy' onClick={() => copyToClipboard(copyText)}>
        {isCopied ? 'Copied' : 'Copy'}
      </button>
    </div>
  );
};

export default Clipboard;
