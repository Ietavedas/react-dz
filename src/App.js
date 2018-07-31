import React, { Component } from 'react';
// import logo from './logo.svg';
import RegistrationForm from './components/registration';
import Auth from './components/authorization';
import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// const API = 'http://sfs.dev.unit6.ru/swagger/v1/swagger.json';
// const API = 'http://sfs.dev.unit6.ru/requestforms';
const options = {
    mode: 'no-cors',
    method: 'POST',
    // 'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/*+json; charset=utf-8',
    // body: null
    body: JSON.stringify({
        "id": "string",
        "firstName": "string",
        "middleName": "string",
        "lastName": "string",
        "country": "string",
        "city": "string",
        "street": "string",
        "house": "string",
        "appartment": "string",
        "zip": "string",
        "date": "2018-07-30T19:15:42.884Z"
      })
    // headers: new Headers({
    //     'mode': 'no-cors',
    //     'Access-Control-Allow-Origin': '*',
    //     'Content-Type': 'application/json'
    // })
}

class App extends Component{
    constructor(){
        super();
        this.state = {
            data: []
        };
    }

    // componentDidMount(){
    //     fetch(API)
    //         .then(response => response.json())
    //         .then(data => this.setState({data}))
    //         .then(data => console.log(this.state))
    // }

    render(){
        // console.log(this.state)
        return (
          <div className="app">
            <RegistrationForm />
            <Auth />
          </div>
        )
    }
}

export default App;
