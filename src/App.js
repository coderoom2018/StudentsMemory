import React, { Component } from 'react';
import './App.css';
import Main from './pages/Main';
// import imageSrc from './im12/im-12-김기빈.jpg'
// import * from './im12'

export default class App extends Component {
  constructor() {
    super();
    this.state = { data: [] }
  }

  // async componentDidMount() {
  //   try {
  //     const res = await fetch('/im/im12/im-12.json')
  //     const jsonData = await res.json()
  //     const data = await jsonData.data

  //     this.setState({ data })
  //   } catch(error){
  //     console.log(error.message);
  //   }
  // }

  componentDidMount = () => {
    const images = this.importAllImages(require.context('./im12', false, /\.(png|jpe?g|svg)$/));
    this.setState({ data: images })
  }

  importAllImages = (r) => {
    return r.keys().map(r);
  }
  
  

  render() {
    console.log("[*] state.data: ", this.state.data)
    return (
      <div className="App">
        <div className="myApp_title" type="text">
          Students Memory
        </div>
        <img  src={ this.state.data.length > 0 ? this.state.data[0].image : null} />
        <img  src={this.state.data[1]} />
        <Main />
      </div>
    );
  }
}
