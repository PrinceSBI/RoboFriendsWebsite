import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import Hello from './Hello';
// import Card from './Card';
// import CardList from './CardList';
import reportWebVitals from './reportWebVitals';
import App from './containers/App';
import 'tachyons'
// import { robots } from './robots';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Hello greeting={'Hello React Ninja'} />
    <App />
    <h1>Good Bye World</h1> */}
    {/* <Card id={robots[0].id} name={robots[0].name} email={robots[0].email}/>
    <Card id={robots[1].id} name={robots[1].name} email={robots[1].email}/>
    <Card id={robots[2].id} name={robots[2].name} email={robots[2].email}/>
    <Card id={robots[3].id} name={robots[3].name} email={robots[3].email}/> */}
    {/* <CardList robots={robots}/> */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
