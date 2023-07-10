import React from 'react';
import { createRoot } from 'react-dom/client';
 import { Provider } from 'react-redux';
import { store } from './app/store';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css';
import { reduceRight } from 'lodash';
import App from './App';




const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <BrowserRouter>
     <React.StrictMode>
        <Provider store={store}> 
         <App/>
         </Provider>
      </React.StrictMode> 
    </BrowserRouter>
       


 

  
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
{/* <React.StrictMode>
//         <Provider store={store}>
//           <BrowserRouter>
//             {/* <Nav /> */}
//             <MainApp />
//           </BrowserRouter>
//         </Provider>
// </React.StrictMode> */}


