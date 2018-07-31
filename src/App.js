import React, { Component } from 'react';
// import logo from './logo.svg';
import RegistrationForm from './components/registration';
import Auth from './components/authorization';
import Bid from './components/bid';
import './App.css';

const user = {
    type: {
        email: "email",
        password: "password",
        tel: "tel",
        text: "text"
    },
    placeholder: {
        email: "email",
        password: "Пароль",
        tel: "tel",
        login: "login"
    }
}

const formBid = {
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
    "date": "2018-07-31T06:51:31.594Z"
}

// const API = 'http://sfs.dev.unit6.ru/swagger/v1/swagger.json';
// const API = 'http://sfs.dev.unit6.ru/requestforms';
const options = {
    'mode': 'no-cors',
    'method': 'POST',
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json; charset=utf-8'
}

class App extends Component{
    constructor(){
        super();
        
    }

    // componentDidMount(){
    //     fetch(API)
    //         .then(response => response.json())
    //         .then(data => this.setState({data}))
    //         .then(data => console.log(this.state))
    // }

    render(){
        return (
          <div className="app">
            <RegistrationForm params={user} />
            <Auth params={user} />
            <Bid />
          </div>
        )
    }
}

export default App;
