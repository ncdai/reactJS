var BaiViet = React.createClass({
    like() {
        this.state.luotThich = (this.state.thich == 1) ? parseInt(this.state.luotThich) - 1 : parseInt(this.state.luotThich) + 1;
        this.state.thich = 1 - parseInt(this.state.thich);
        this.state.text = (this.state.thich == 1) ? "Bo thich" : "Thich";
        this.setState(this.state);
    },

    getInitialState() {
        return {
            luotThich: this.props.luotThich,
            thich: 0,
            text: "Thich"
        }
    },

    render() {
        return(
            <div>
                <h1>{this.props.tieuDe}</h1>
                <h3>Luot thich: {this.state.luotThich}</h3>
                <p>{this.props.moTa}</p>
                <p>{this.state.text}</p>
                <button onClick={this.like}>{this.state.text}</button>
            </div>
        );
    }
});

ReactDOM.render(
    <div>
        <BaiViet tieuDe="Hoc lap trinh Reactjs" luotThich="10" moTa="Lap trinh giao dien nguoi dung voi ReactJS" />
        <BaiViet tieuDe="Hoc lap trinh Nodejs" luotThich="20" moTa="Lap trinh server, client voi Nodejs" />
    </div>
    , document.getElementById('root')
);
