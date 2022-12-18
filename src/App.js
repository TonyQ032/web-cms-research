import './App.css';
import { useRef, useState } from 'react';
import NewPage from './components/newPage';


import MDEditor from '@uiw/react-md-editor';

// Markdown to jsx
// const App = () => {
//   const userText = useRef("");

//   const [textData, setTextData] = useState("## Your page will generate here!");

//   // Sets textData for markup
//   const handleClick = event => {
//     // setTextData(JSON.stringify(userText.current.value));
//     setTextData(userText.current.value);
//   };

//   return (
//     <main>
//       <label htmlFor="user-text-area">User form</label>
//       <textarea placeholder="Input your markdown here to generate a new page!" ref={userText} id="user-text-area" name="user-text-area" rows="30" cols="75" />

//       <button onClick={handleClick}>Generate Page</button>

//       {/* <NewPage data={typeof (textData) === Object ? JSON.parse(textData) : textData} /> */}
//       <NewPage data={textData} />
//     </main>
//   );
// };


// MD Editor
const App = () => {
  const [value, setValue] = useState("**Hello world!!!**");

  return (
    <div className="container">
      <MDEditor
        value={value}
        onChange={setValue}
      />

      <h1>Your generated page!</h1>
      <MDEditor.Markdown source={value} style={{ whiteSpace: 'pre-wrap' }} />

      {/* Can be safely and easily converted back and forth from string to JSON object without any issues */}
      <MDEditor.Markdown source={JSON.parse(JSON.stringify(value))} style={{ whiteSpace: 'pre-wrap' }} />
    </div>
  );
}


export default App;
