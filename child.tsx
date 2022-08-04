import * as React from 'react';
import './style.css';

interface props {
  isSavePressed: number;
}

export default function Child(myProp: props) {
  return <div>I'm the child! {myProp.isSavePressed} </div>;
}
