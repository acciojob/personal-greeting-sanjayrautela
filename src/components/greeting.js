import { Component } from "react";

class Greeting extends Component {
    constructor(props) {
        super(props);
        this.state = {value:""};
    }

    onChangeText = (event)=>{
        const newValue = event.target.value;
        this.setState({value:newValue});
    }

    render(){
        return(
            <div>
                <label htmlFor="input">Enter Your Name: </label><br></br>
                <input id="input" value={this.state.value} onChange={this.onChangeText}></input>
                {this.state.value ? <p>Hello {this.state.value}!</p> : null}
            </div>
        )
        
    }
}
export default Greeting;