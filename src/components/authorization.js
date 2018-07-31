import React, {Component} from 'react';
import Input from './input';

class Auth extends Component{
    constructor(props){
        super(props);

        console.log(this.props.params)
    }

    render(){
        return (
            <form className="form registration">

                <p className="form__title">Вход</p>

                <Input 
                    type={this.props.params.type.email} 
                    placeholder={this.props.params.placeholder.email} 
                    />

                <Input 
                    type={this.props.params.type.password} 
                    placeholder={this.props.params.placeholder.password} 
                    />
               
                <div className="flex start_full">
                    <input className="button" type="submit" value="Вход" />
                    <a href="" className="button button--mid button--grey">Зарегистрироваться</a>
                </div>

            </form>
        )
    }
}

export default Auth;