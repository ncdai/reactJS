var InputTag = React.createClass({
    show() {
        var text = this.refs.txt.value;
        alert(text);
    },
    render() {
        return(
            <div>
                <input type="text" ref="txt"/>
                <button onClick={this.show}>Hien thi</button>
            </div>
        );
    }
});

var KhoaHoc = React.createClass({
    addStudent() {
        this.state.tongHocVien = parseInt(this.state.tongHocVien) + 1;
        this.setState(this.state);
    },
    getInitialState() {
        return {
            tongHocVien: this.props.tongHocVien
        }
    },
    render: function() {
        return(
            <div>
                <h1>{this.props.ten}</h1>
                <p>So hoc vien: {this.state.tongHocVien}</p>
                <button onClick={this.addStudent}>Dang ky hoc</button>
            </div>
        );
    }
})

ReactDOM.render(
    <div>
        <InputTag />
        <KhoaHoc ten="ReactJS" tongHocVien="10" />
        <KhoaHoc ten="NodeJs" tongHocVien="20" />
    </div>
    , document.getElementById('root')
);
