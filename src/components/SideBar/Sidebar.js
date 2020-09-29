import React from 'react';
import { Menu } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';


const SideBar = (props) => {
    return (
        <>
            <Menu
                mode="inline"
                defaultSelectedKeys={props.default}
                style={{ height: '100%', borderRight: 0 }}
            >
                <Menu.Item key="1" icon={<UserOutlined />}><Link to={'/dashboard' + props.grpId}>Dashboard</Link></Menu.Item>
                <Menu.Item key="2" icon={<LaptopOutlined />}><Link to={'/engagement' + props.grpId}>Engagement</Link></Menu.Item>
                <Menu.Item key="3" icon={<NotificationOutlined />}>Members</Menu.Item>

            </Menu>
        </>)
}

export default SideBar