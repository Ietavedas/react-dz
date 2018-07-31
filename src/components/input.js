import React, {Component} from 'react';

class Input extends Component{
    constructor(props){
        super(props);

        this.state = {
            email: "",
            password: "",
            tel: "",
            text: ""
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        const target = event.target;
        const targetType = target.type;
        const targetValue = target.value;

        this.setState({
            [targetType]: targetValue
        })
    }

    render(){
        return (
            <input 
                className="input" 
                type={this.props.type} 
                placeholder={this.props.placeholder}
                onChange={this.handleChange}
                value={this.state[this.props.type]} />
        )
    }
}

export default Input;