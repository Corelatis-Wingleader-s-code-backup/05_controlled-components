import React from 'react';
import './App.css';
import { Header } from './Header'
import { HomePage } from './HomePage';
import CreateQuestion from './CreateQuestion'
class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <CreateQuestion />
      </div>
    )
  }
}

export default App;
