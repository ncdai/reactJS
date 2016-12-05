var App = React.createClass({
    click() {
        this.state.count += 1;
        this.setState(this.state);
    },
    getInitialState() {
        return {
            count: 0
        }
    },
    render() {
        return(
            <button onClick={this.click}>Hello {this.state.count}</button>
        );
    }
});

ReactDOM.render(
    <App />
    , document.getElementById('root')
);
