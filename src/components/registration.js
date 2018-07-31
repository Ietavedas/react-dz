import React, {Component} from 'react';
import Input from './input';

class RegistrationForm extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <form className="form registration">
            
                <p className="form__title">Регистрация</p>

                <Input 
                    type={this.props.params.type.text} 
                    placeholder={this.props.params.placeholder.login} 
                    />

                <Input 
                    type={this.props.params.type.email} 
                    placeholder={this.props.params.placeholder.email} 
                    />

                <Input 
                    type={this.props.params.type.password} 
                    placeholder={this.props.params.placeholder.password} 
                    />

                <div className="flex start_full">
                    <input className="button" type="submit" value="Зарегистрироваться" />
                    <a href="" className="button button--mid button--grey">Вход</a>
                </div>
            </form>
        )
    }
}

export default RegistrationForm;