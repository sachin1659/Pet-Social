import React from 'react';
import Login from './components/Login';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Register from './components/Register';
import Header from './components/Header';
import Footer from './components/Footer';
import MainComponent from './components/MainComponent';

class App extends React.Component {

  render(){
  return (
    <BrowserRouter>
    <div className="App">
    <Header />
      <Route path="/" exact component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/dashboard" component={MainComponent} />
   <Footer />
    </div>
    </BrowserRouter>
  );
}
}

export default App;
