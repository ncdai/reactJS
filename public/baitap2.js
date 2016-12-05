var Album = React.createClass({
    next() {
        this.state.imageNum = (this.state.imageNum < 5) ? this.state.imageNum + 1 : this.state.imageNum;
        this.setState(this.state);
    },
    back() {
        this.state.imageNum = (this.state.imageNum > 1) ? this.state.imageNum - 1 : this.state.imageNum;
        this.setState(this.state);
    },
    getInitialState() {
        return {
            imageNum: 1
        }
    },
    render() {
        return(
            <div className="BaiTap2">
                <img src={'images/' + this.state.imageNum + '.png'} className="image" />
                <hr/>
                <button onClick={this.next} className="btn btn-info">Tiep theo</button>
                <button onClick={this.back} className="btn btn-success">Quay lai</button>
            </div>
        );
    }
});

ReactDOM.render(
    <Album />
    , document.getElementById('root')
);
