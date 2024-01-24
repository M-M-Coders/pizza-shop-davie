import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './index.css';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.createRoot(  document.getElementById('root')).render(
  <React.StrictMode>
  <App />
</React.StrictMode>,
)

// reportWebVitals()
