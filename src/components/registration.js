import React, {Component} from 'react';

class RegistrationForm extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <form className="form registration">
                <p className="form__title">Регистрация</p>

                <input className="input" type="text" placeholder="login" />
                <input className="input" type="password" placeholder="password" />
                <input className="input" type="email" placeholder="email" />

                <div className="flex start_full">
                    <input className="button" type="submit" value="Зарегистрироваться" />
                    <a href="" className="button button--mid button--grey">Вход</a>
                </div>
            </form>
        )
    }
}

export default RegistrationForm;