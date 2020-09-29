import React, { Component } from "react";
import { Select } from 'antd';
import { Bar } from 'react-chartjs-2';

const { Option } = Select;

class Charts extends Component {


    render() {
        return (
            <>
                
                <Select defaultValue="usa" onChange={this.props.labelChange}>
                    <Option value="usa">Usa</Option>
                    <Option value="india">India</Option>
                    <Option value="uk">UK</Option>
                </Select>
                <Select defaultValue="newmember" onChange={this.props.dataChange}>
                    <Option value="newmember">New Members</Option>
                    <Option value="current">Current Members</Option>
                    <Option value="left">Members Left</Option>
                </Select>
                    {/* <button onClick={this.props.labelChange}>Change Label</button>
                    <button onClick={this.props.dataChange}>Change Data</button> */}
                    <Bar
                        data={this.props.dataset}
                        options={{ maintainAspectRatio: false }}
                    />
                
            </>
        );
    }
}

export default Charts;