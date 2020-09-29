import React, { Component } from 'react';
import { Layout, Menu, Row, Col } from 'antd';
import axios from '../../axios/axios';

import Card from './Cards';
import Sidebar from '../SideBar/Sidebar';


const { Content, Sider } = Layout;

class Dashboard extends Component {

    state = {
        list: [],
        grpName: '',
        createdOn: '',
        tolmembers: '',
        tolposts: '',
        show: false
    }

    componentDidMount () {
        let grpId = this.props.match.params.id;
        axios.get('/groups/' + grpId)
            .then(response => {
                this.setState({
                    grpName: response.data.name,
                    createdOn: response.data.created_on
                })
            });
        axios.get('/groups/' + grpId + '/members')
            .then(response => {
                this.setState({
                    tolmembers: response.data.total
                })
                console.log(response.data)
            });
        axios.get('/posts')
            .then(response => {
                this.setState({
                    tolposts: response.data.total
                })
            })
        
    }
    
    onCardClick = () => {

    }

    onModeratorClick = () => {
        this.setState({ list: ['Kumar Verma','Vigesh Jalan','Rahul Sharma', 'Ajay Kumar','Neha Singh', 'Rajiv Roy','Ajay Kumar', 'Vishal Jain'], show: true})
    }

    onAdminClick = () => {
        this.setState({ list: ['Rahul Sharma', 'Neha Singh', 'Rajiv Roy', 'Vishal Jain'] ,show: true })
    }

    onSidebarClick = () => {

    }

    render() {
        let content = null;

    if (this.state.show) {
        content = this.state.list.map((item) => <div><h4>{item}</h4></div>)
    }


        return <Layout>
            <Sider width={200} className="site-layout-background">
                <Sidebar default="1" grpId={this.props.match.params.id} />
            </Sider>
            <Content style={{ padding: '20px 50px' }}>
                <div style={{ background: '#fff', padding: '24px', minHeight: '300px' }}>
                    <h4>Summary</h4>
                    <h2>{this.state.grpName}</h2>
                    <Row style={{marginBottom: '100px'}}>
                        <Col><Card clicked={this.onCardClick} title="Created On" 
                            content={this.state.createdOn.split("T")[0]} /></Col>
                        <Col offset={4} ><Card clicked={this.onCardClick} title="Total Posts" content={this.state.tolposts} /></Col>
                        <Col offset={4}><Card clicked={this.onCardClick} title="Total Members" content={this.state.tolmembers} /></Col>
                    </Row>
                    <Row style={{marginBottom: '60px'}}>
                    <Col><Card clicked={this.onAdminClick} title="Total Admins" content="4" /></Col>
                    <Col offset={4}><Card clicked={this.onModeratorClick} title="Moderators" content="8" /></Col>
                    <Col offset={4}><Card clicked={this.onCardClick} title="Active Members" content="602" /></Col>
                    </Row>
                    <Row>
                        <Col span={8}>
                            {content}
                        </Col>
                    </Row>
                </div>
            </Content>
        </Layout>
    }
}

export default Dashboard;