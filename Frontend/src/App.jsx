import { useState, useEffect } from "react";
import "prismjs/themes/prism-tomorrow.css";
import prism from "prismjs"; // for syntax highlighting
import Editor from "react-simple-code-editor";
import './App.css';
import axios from 'axios'; // for making HTTP requests
import Markdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import "highlight.js/styles/github-dark.css";

function App() {

  const [code, setCode] = useState("Enter the code you want to review here...");
  const [review, setReview] = useState(``); 

  useEffect(() => {
    prism.highlightAll();
  },[]);

  async function reviewCode() {
    //const response = await axios.post(`${process.env.REACT_APP_API_URL}/ai/get-review`, {code});
    const response = await axios.post('http://localhost:3000/ai/get-review', {code});
    setReview(response.data);
  }

  return(
    <>
    <main>
      <div className="left">
        <div className="code">
          <Editor
            value={code}
            onValueChange={code => setCode(code)}
            highlight={code => prism.highlight(code, prism.languages.javascript, 'javascript')}
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 16,
              border: '1px solid #ddd',
              borderRadius: "5px",
              height: "100%",
              width: "100%"
            }}
          />
        </div>
        <div 
        onClick={reviewCode}
        className="review">Review</div>
      </div>

      <div className="right">
        <Markdown
        rehypePlugins={[rehypeHighlight]}
        >{review}</Markdown>
      </div>
    </main>
    </>
  );
}

export default App;