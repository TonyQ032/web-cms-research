import './App.css';
import { useRef, useState } from 'react';
import NewPage from './components/newPage';

const App = () => {
  const userText = useRef("");

  const [textData, setTextData] = useState("## Your page will generate here!");

  // Sets textData for markup
  const handleClick = event => {
    // setTextData(JSON.stringify(userText.current.value));
    setTextData(userText.current.value);
  };

  return (
    <main>
      <label htmlFor="user-text-area">User form</label>
      <textarea placeholder="Input your markdown here to generate a new page!" ref={userText} id="user-text-area" name="user-text-area" rows="30" cols="75" />

      <button onClick={handleClick}>Generate Page</button>

      {/* <NewPage data={typeof (textData) === Object ? JSON.parse(textData) : textData} /> */}
      <NewPage data={textData} />
    </main>
  );
};


export default App;
