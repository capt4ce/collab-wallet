import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './Routes';
import Loading from './views/Loading';
import Header from './views/Header';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={Loading}>
          {/* <Header /> */}
          {/* <UserConfigContext/> */}
          {/* <ThemeContext/> */}
          <Routes />
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
