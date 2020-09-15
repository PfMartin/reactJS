import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function MyApp() {
  return (
    <ul>
      <li>First Element</li>
      <li>Second Element</li>
      <li>Third Element</li>
    </ul>
  )
}

ReactDOM.render(
  <MyApp />,
  document.querySelector('#root')
)


// Non-functional way
// ReactDOM.render(
//   <ul>
//     <li>First Element</li>
//     <li>Second Element</li>
//     <li>Third Element</li>
//   </ul>
//   , document.querySelector('#root'));