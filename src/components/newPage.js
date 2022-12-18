import Markdown from 'markdown-to-jsx';

const NewPage = (props) => {

  return <Markdown>{props.data}</Markdown>
};


export default NewPage;
