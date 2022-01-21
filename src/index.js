import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import * as serviceWorker from './serviceWorker';

import { BrowserRouter } from 'react-router-dom'

import {Provider} from 'react-redux';
import { createStore } from 'redux';




let 초기값 =[
  { id: 0, name : '샤넬 향수', quan : 6 }, 
  {id: 1, name : '디올 향수', quan : 4},
  {id: 2, name : '딥디크 향수', quan : 9}

];


function reducer(state = 초기값, 액션){
  if(액션.type === '수량증가'){

    let copy = [...state];
    copy[0].quan++;
    return copy

  }else if(액션.type === '수량감소'){
    let copy = [...state];
    copy[0].quan--;
    return copy

  }else {  
    return state
  }

}



let store = createStore(reducer);



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
