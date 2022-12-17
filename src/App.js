import './App.css';
import { useRef, useState } from 'react';
import Markdown from 'markdown-to-jsx';

const App = () => {
  const userText = useRef("");

  const [textData, setTextData] = useState("## Your page will generate here!");

  // Sets textData for markup
  const handleClick = event => {
    setTextData(userText.current.value)
  };

  return (
    <main>
      <label htmlFor="message">User form</label>
      <textarea placeholder="Input your markdown here to generate a new page!" ref={userText} id="message" name="message" rows="30" cols="75" />

      <button onClick={handleClick}>Generate Page</button>

      <Markdown>{textData}</Markdown>
    </main>
  );
};


export default App;
