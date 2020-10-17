import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './Routes';
import Loading from './views/Loading';

function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={Loading}>
          <Routes />
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
