import './App.css';
import { useRef } from 'react';

const App = () => {
  const userText = useRef("");

  const handleClick = event => {
    // Access textarea value
    console.log(userText.current.value);
  };

  return (
    <main>
      <label htmlFor="message">User form</label>
      <textarea ref={userText} id="message" name="message" rows="30" cols="75" />

      <button onClick={handleClick}>Click</button>
    </main>
  );
};


export default App;
