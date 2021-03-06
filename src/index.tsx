import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App/App';
import { Router } from 'react-router-dom'
import history from './utils/history';


ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('root')
);

