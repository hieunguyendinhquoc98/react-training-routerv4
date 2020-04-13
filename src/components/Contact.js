import React from 'react';
import { Prompt } from 'react-router-dom';
class Contact extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            isChecked: true
        }
    }
    onClick = (isChecked) =>{
        this.setState({
            isChecked: isChecked
        })
    }
    render() {
        var { isChecked } = this.state;
        return (
            <div>
                This is Contact<br></br>
                <button type="button" className="btn btn-info" onClick= { () => this.onClick(false)}>Cho Phép</button><br></br>
                <button type="button" className="btn btn-warning" onClick= { () => this.onClick(true)}>Không Cho Phép</button>
                <Prompt
                    when={isChecked}
                    message={ location => (`Bạn chắc chắn muốn đi đến ${location.pathname}`)}
                ></Prompt>
            </div>
        );
    }
}

export default Contact;
