import React from "react";
import './App.css';
import './form/button'
import Button from './form/button';
import './form/formwrapper'
import FormWrapper from './form/formwrapper';

function App() {
  const a="名前";
  return (
    <div>
      <Button name="名前"/>
      <FormWrapper/>
      
    </div>
  );
}

export default App;

