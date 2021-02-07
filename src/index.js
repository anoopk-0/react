import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//entry file.

ReactDOM.render(
  /**
   * In React, there is a component called StrictMode that you can use to wrap some part of your codebase (or the whole codebase!) 
   * and this component will throw warnings in the console whenever it detects components with unsafe lifecycle, old ref or context usage, 
   * and more!
   */
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


/**
React's StrictMode is sort of a helper component that will help you write better react components, you can wrap a set of components with <StrictMode /> and it'll basically:

  -Verify that the components inside are following some of the recommended practices and warn you if not in the console.
  -Verify the deprecated methods are not being used, and if they're used strict mode will warn you in the console.
  -Help you prevent some side effects by identifying potential risks.
 *
 */