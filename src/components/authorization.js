import React, {Component} from 'react';

class Auth extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <form className="form registration">
                <p className="form__title">Вход</p>

                <input className="input" type="email" placeholder="email" />
                <input className="input" type="password" placeholder="Пароль" />
               
                <div className="flex start_full">
                    <input className="button" type="submit" value="Вход" />
                    <a href="" className="button button--mid button--grey">Зарегистрироваться</a>
                </div>
            </form>
        )
    }
}

export default Auth;