import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import HomeScreen from './components/Homescreen/Homescreen';
import Dashboard from './components/Dashboard/Dashboard';
import Engagement from './components/Engagement/Engagement';

function App() {
  return (
    <>
      <Route path="/" exact component={HomeScreen} />
      <Route path="/dashboard:id" exact component={Dashboard} />
      <Route path="/engagement:id" exact component={Engagement} />
    </>
  );
}

export default App;
