import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Loader from 'react-loader-spinner';
import * as serviceWorker from './serviceWorker';
import { usePromiseTracker } from "react-promise-tracker";

const LoadingIndicator = props => {
	const { promiseInProgress } = usePromiseTracker();
	   return (
	     promiseInProgress && 
		   <div
		         style={{
		           width: "100%",
		           height: "100",
		           display: "flex",
		           justifyContent: "center",
		           alignItems: "center"
		         }}
		       >
		         <Loader type="ThreeDots" color="#2BAD60" height="100" width="100" />
		       </div>
	  );  
}

ReactDOM.render(
  <React.StrictMode>
	<LoadingIndicator/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
