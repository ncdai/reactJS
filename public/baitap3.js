var Image = React.createClass({
    changeImage() {
        this.state.hinh = (this.state.hinh % 5) + 1;
        this.setState(this.state);
    },
    getInitialState() {
        return {
            hinh: 1
        }
    },
    render() {
        return(
            <div>
                <img src={"images/" + this.state.hinh + ".png"} className="image" />
            </div>
        );
    },
    componentDidMount() {
        setInterval(this.changeImage, 1000);
    }
});

ReactDOM.render(
    <Image />
    , document.getElementById('root')
);
