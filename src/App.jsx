import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header.jsx';
import HomePage from './pages/HomePage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Route exact path="/" component={ HomePage } />
          <Route exact path="/profile" component={ ProfilePage } />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;