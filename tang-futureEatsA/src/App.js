import React, { useState } from 'react'
import Router from './Routes/Route'
import GlobalState from './Global/GlobalState';

function App() {
 

  return (
    <div>
      <GlobalState>
        <Router /> 
      </GlobalState>
    </div>
  );
}

export default App;