import React from 'react';
import { MdContentCopy, MdCheck } from 'react-icons/md';
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
        {isCopied ? <MdCheck size={18} /> : <MdContentCopy size={18} />}
      </button>
    </div>
  );
};

export default Clipboard;
