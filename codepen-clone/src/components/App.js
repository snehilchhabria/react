import React from "react";
import Editor from "./Editor";

function App() {
  return (
    <>
    <div classname="pane top-pane">
      <Editor />
      <Editor />
      <Editor />
    </div>
    <div classname="pane">
    <iframe
    title="output"
    sandbox="allow-scripts"
    frameBorder="0"
    width="100%"
    height="100%"
     />
    </div>
    </>
  )
}

export default App;
