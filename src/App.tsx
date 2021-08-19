import React from 'react';
import {Switch, Route} from 'react-router-dom'
import MainPage from './pages/main-page/main-page';
import BookPage from './pages/book-page/book-page'
import './App.css';

function App() {
  return (
    <div className="App">
      
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route path='/:id' component={BookPage} />
      </Switch>

    </div>
  );
}

export default App;
