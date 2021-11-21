import React from 'react';

// CONTAINERS
import Desktop from './containers/Desktop';

// COMPONENTS
import Header from './components/UI/organisms/Header';

// STYLES
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Desktop />
    </div>
  );
}

export default App;