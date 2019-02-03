import React, { Component } from 'react';
import Header from './component/header/Header';
import Cover from './component/Cover';
import Section from './component/section/Section';



class App extends Component {
  render() {
    return (
      <div>
          <Header />
          <Cover message="Welcome Message" />
          <Section />
      </div>
    );
  }
}

export default App;
