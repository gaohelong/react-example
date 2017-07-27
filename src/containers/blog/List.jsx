import React from 'react';
import ListItem from '../../components/blog/ListItem';

class List extends React.Component {
    constructor(props) {
        super(props);

        // state.
        this.state = {
            list: {}
        }

        // func.
        this.initList = this.initList.bind(this);
    }

    componentDidMount() {
        this.initList()
    }

    initList() {
        let _this = this;
        fetch('./api/blog/list.json')
            .then(function(response) {
                return response.json();
            }).then(function(json) {
                if (json.code == 0) {
                    _this.setState({list: json.list});
                }
                // console.log('parsed json', json);
            }).catch(function(ex) {
                console.log('parsing failed', ex);
            });
    }

    render() {
        let list = '';
        if (this.state.list.length) {
            list = this.state.list.map((resRow) => {
                let key = 'list_' + resRow.id;
                return <ListItem resRow={resRow} key={key} />
            });
        }

        return (
            <div className="hl-list">{list}</div>
        );
    }
}

export default List;
