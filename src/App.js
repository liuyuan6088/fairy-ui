import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import style from './App.less';

const App = ({ children }) => {
  return (
    <Router>
      <div className={style.layout}>
        <div className={style.header}>hello world</div>
        <div className={style.container}>
          <div className={style.siderbar}>
            <Link to="/button">button</Link>
          </div>
          <div className={style.content}>
            {children}
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
