# modal-save-employee-p14

> React modal message validation save employee

[![NPM](https://img.shields.io/npm/v/modal-save-employee-p14.svg)](https://www.npmjs.com/package/modal-save-employee-p14) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save modal-save-employee-p14
```
## Table of props
|   | Unit          | Example |
| :--------------- |:---------------:| -----:|
| Content |   String        |  "Employee Crée" |
| Toggle | Boolean             |   false or true |
| action  | function          |     function openModal() { setmodalState(!toggle) } |
## Usage

```jsx
import './App.css';
import React from 'react';
import Modal from 'modal-save-employee-p14';

export function App() {
  const [modalState, setmodalState] = React.useState(false)
  const [content, setContent] = React.useState("");
  function openModal(){
    setmodalState(!modalState)
}
function saveData(){
      setContent("Employee Crée")
      openModal()
}
  return (
    <div className="App">
      <header className="App-header">
      <Modal content={content} toggle={modalState} action={openModal}/>
      <button variant="outlined" onClick={saveData}>AfficheModal</button>
      </header>
    </div>
  );
}

export default App; 

```

## License

MIT © [qgrems](https://github.com/qgrems)
