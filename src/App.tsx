import React from 'react';
import * as R from 'react-router-dom';
import Graph from './pages/Graph';

const App = () => {
  return (
    <R.BrowserRouter>
      <R.Routes>
        <R.Route path='/' element={<Graph />} />
      </R.Routes>
    </R.BrowserRouter>
  );
};

export default App;