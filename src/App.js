import React from 'react';
import './App.scss';

import TourList from './Components/TourList/TourList'
import Navbar from './Components/Navbar/Navbar'

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <TourList />
    </React.Fragment>
  );
}

export default App;
