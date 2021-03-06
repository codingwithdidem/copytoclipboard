import React, { useState, useEffect } from 'react';
import Prism from 'prismjs';
import Clipboard from './components/Clipboard';
import './App.css';
import 'prismjs/themes/prism-okaidia.css';

const App = () => {
  const [text, setText] = useState('');
  const code = `
     const coffee = new Coffee();
     console.log('Here is your coffee', coffee)
  `;

  const code2 = `
    // take the input from the user
    const number = prompt('Enter the number: ');
    
    const result = Math.sqrt(number);
    console.log(\`The square root of \${number} is \${result}\`);
`;

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className='App'>
      <Clipboard copyText={code} />
      <Clipboard copyText={code2} />

      <textarea
        type='text'
        value={text}
        rows={25}
        onChange={(event) => setText(event.target.value)}
      />
    </div>
  );
};

export default App;
