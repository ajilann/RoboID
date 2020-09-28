import React, {Component} from 'react';

class ErrorBOundry extends Component {
    constructor(props){
        super(props);
        this.state = {
            hasError : false
        }
    }
    componentDidCatch(error, info) {
        this.setState({hasError : true})
    }
    render() {
            if(this.state.hasError) {
                return <h1>"Oops that is not goog</h1> 
            }
            return this.props.children
    }
} 
export default ErrorBOundry;