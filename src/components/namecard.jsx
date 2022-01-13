import React, {Component} from 'react';

class NameCard extends Component {
        constructor(props) {
        super(props);
        this.state = {
            newAge: props.age
        }
    }
    ageHandler = () => {
        this.setState({
            newAge: this.state.newAge+1
        })
    }
    render() {
        const { firstName, lastName, hairColor} = this.props;
        return(
            <div>
                <h2> {lastName}, {firstName} </h2>
                <h3> Age: {this.state.newAge} </h3>
                <h3> Hair Color: {hairColor} </h3>
                <button onClick={this.ageHandler}>Add a Year!</button>
            </div>
        );
    }
}

export default NameCard