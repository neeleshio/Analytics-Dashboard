import React, { Component } from 'react';
import { Layout, Menu, Row, Col } from 'antd';
import FileSelect from '../FileSelect/FileSelect';
import Groups from '../Groups/Groups';
import Dashboard from '../Dashboard/Dashboard';


const { Header, Content, Sider } = Layout;

class Homescreen extends Component {

    state = {
        selected: 'Groups'
    }

    onNavClick = (item) => {
        this.setState({ selected: item })
    }

    render() {

        let content;

        if (this.state.selected === 'Groups') {
            content = <Groups />
        }
        if (this.state.selected === 'Upload') {
            content = <FileSelect />
        }
        return <Layout>
            <Header>
                <Menu theme="dark" mode="horizontal">
                    <Menu.Item key="1" onClick={() => this.onNavClick('Upload')}>Upload</Menu.Item>
                    <Menu.Item key="2" onClick={() => this.onNavClick('Groups')}>Groups</Menu.Item>
                    <Menu.Item key="3">Extra</Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '20px 50px' }} >
                <div style={{ background: '#fff', padding: '24px', minHeight: '300px' }}>
                    <Row>
                        <Col offset={8}>
                            {content}
                        </Col>
                    </Row>
                </div>
            </Content>
        </Layout>
    }

}

export default Homescreen;