import React, { Component } from 'react';
import { Button, Row, Col } from 'antd';
import { Link } from 'react-router-dom';

import axios from '../../axios/axios';

class Groups extends Component {
    state = {
        groups: null
    }
    componentDidMount = () => {
        axios.get('/groups')
            .then(response => {
                this.setState({groups: response.data});
            });
    }

    render () {
        let content = null;
        if(this.state.groups != null) {
        content = this.state.groups.map(item => {
            return (<><Button style={{ marginBottom: '20px', width: '200px'}}>
                <Link to={'/dashboard' + item.id}>{item.name}</Link>
                </Button><br />
                </>);
        });
    }

        return <>
            <h2>List of Pages</h2>            
            {content}
        </>
    }
        
}

export default Groups;