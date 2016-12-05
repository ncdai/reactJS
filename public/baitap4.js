var Note = React.createClass({
    render() {
        return(
            <div>
                <img src={this.props.src} className="image" />
                <p>{this.props.children}</p>
            </div>
        );
    }
});

var List = React.createClass({
    add() {
        // push: them phan tu vao cuoi mang
        // unshift: them phan tu vao dau mang
        this.state.mang.push({
            srcHinh: "images/5.png",
            noiDung: "NCD.VKN"
        });
        this.setState(this.state);
    },
    getInitialState() {
        return {
            mang: [
                {
                    srcHinh: "images/1.png",
                    noiDung: "Chanh"
                },
                {
                    srcHinh: "images/2.png",
                    noiDung: "Dai"
                },
                {
                    srcHinh: "images/3.png",
                    noiDung: "Kim"
                },
                {
                    srcHinh: "images/4.png",
                    noiDung: "Ngan"
                }
            ]
        }
    },
    render() {
        return(
            <div>
                <button onClick={this.add}>Them</button>
                {
                    this.state.mang.map(function(note, index) {
                        return <Note key={index} src={note.srcHinh}>{note.noiDung}</Note>
                    })
                }
            </div>
        );
    }
});

ReactDOM.render(
    <List />
    , document.getElementById('root')
);
