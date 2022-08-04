import * as React from 'react';
import Child from './child';
import './style.css';

export default function App() {
  const [value, setValue] = React.useState(0);

  const onSave = () => {
    setValue(1);
  };

  const resetSaveValue = () => {
    setValue(0);
  };

  return (
    <div>
      I'm the parent
      <button onClick={onSave}> SAVE </button>
      <Child isSavePressed={value} callBack={resetSaveValue}></Child>
    </div>
  );
}
