import * as React from 'react';
import './style.css';

interface props {
  isSavePressed: number;
  callBack: (resetSavePressed: number) => void;
}

export default function Child(myProp: props) {
  const [valueChild, setChildValue] = React.useState(0);

  React.useEffect(() => {
    if (myProp.isSavePressed !== valueChild) {
      setChildValue(myProp.isSavePressed);

      if (myProp.isSavePressed === 1) {
        showMsg();
      }
    }
  }, [myProp.isSavePressed]);

  const showMsg = () => {
    //delay the flow
    setTimeout(() => {
      myProp.callBack(valueChild);
    }, 2000);
  };

  return (
    <div>
      I'm the child! <input value={valueChild}></input>
    </div>
  );
}
