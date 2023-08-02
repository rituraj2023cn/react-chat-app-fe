import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import Chat from './chat';
import dummyData from './dummyData';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <h1>Simple Chat App</h1>
          <Routes>
            <Route path="/" element={<Chat dummyData={dummyData} />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
