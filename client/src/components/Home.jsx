import React from 'react';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {counter: 0};
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState(({counter}) => ({
                counter: counter + 1
            }));
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div className="container">
                <h1>Hello, Django!</h1>
                <p>I hope you enjoy using react.js</p>
                <p>Add a new paragraph.</p>
                <p>Add another new paragraph.</p>
                <p>Counter: {this.state.counter}</p>
            </div>
        );
    }
}

export default Home;
