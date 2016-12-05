var list;

var Note = React.createClass({
    save() {
        var note = this;
        $.post('/update', {idSua: this.props.id, noiDung: this.refs.txt.value}, function(data) {
            list.setState({mang: data});
            note.setState({onEdit: false});
        });
    },
    cancel() {
        this.setState({
            onEdit: false
        });
    },
    edit() {
        this.setState({
            onEdit: true
        });
    },
    delete() {
        $.post('/delete', {idXoa: this.props.id}, function(data) {
            list.setState({mang: data});
        });
    },
    getInitialState() {
        return {
            onEdit: false
        }
    },
    render() {
        if (this.state.onEdit) {
            return (
                <div className="div-note">
                    <input type="text" ref="txt" defaultValue={this.props.children} />
                    <button onClick={this.save}>Lưu</button>
                    <button onClick={this.cancel}>Huỷ</button>
                </div>
            );
        }
        else {
            return(
                <div className="div-note">
                    <p>{this.props.children}</p>
                    <button onClick={this.delete}>Xoá</button>
                    <button onClick={this.edit}>Sửa</button>
                </div>
            );
        }
    }
});

function addDiv() {
    ReactDOM.render(<InputDiv />, document.getElementById('div-add'));
}

var List = React.createClass({
    getInitialState() {
        list = this;
        return {
            mang: []
        }
    },
    render() {
        return(
            <div className="div-list">
                <button onClick={addDiv}>Thêm</button>
                <div id="div-add"></div>
                {
                    this.state.mang.map(function(note, index) {
                        return <Note key={index} id={index}>{note}</Note>
                    })
                }
            </div>
        );
    },
    componentDidMount() {
        var that = this;
        $.post('/getNotes', function(data) {
            that.setState({mang: data});
        });
    }
});

var InputDiv = React.createClass({
    send() {
        $.post('/add', {note: this.refs.txt.value}, function(data) {
            list.setState({mang: data});
        });
        ReactDOM.unmountComponentAtNode(document.getElementById('div-add'));
    },
    render() {
        return(
            <div>
                <input type="text" ref="txt" placeholder="Enter your note!" />
                <button onClick={this.send}>Gui</button>
            </div>
        );
    }
});

ReactDOM.render(
    <div>
        <List />
    </div>
    , document.getElementById('root')
);
