import React, { Component } from 'react';

import { Layout } from 'antd';
import Charts from '../Charts/Charts';
import axios from '../../axios/axios';

import Sidebar from '../SideBar/Sidebar';


const { Content, Sider } = Layout;

class Engagement extends Component {

    componentDidMount() {
        let grpId = this.props.match.params.id;
        let memchart = {
            labels: [],
            datasets: [{
                label: 'New Members',
                data: [],
                backgroundColor: 'blue'
            }]
        }
        let postchart = {
            labels: [],
            datasets: [{
                label: 'New Posts',
                data: [],
                backgroundColor: 'yellow'
            }]
        }
        axios.get('/groups/' + grpId + '/members/new?period=10')
            .then(response => {
                this.setState({testdata: response.data})
                
                this.state.testdata.map(item => {
                    memchart.labels.push(item.date.split("T")[0])
                    memchart.datasets[0].data.push(item.count)
                })
                
                this.setState({
                    chartData: memchart
                })
            });  
        axios.get('/groups/' + grpId + '/posts/new')
            .then(response => {
                this.setState({testdata2: response.data})
                
                this.state.testdata2.map(item => {
                    postchart.labels.push(item.date.split("T")[0])
                    postchart.datasets[0].data.push(item.count)
                })
                
                this.setState({
                    chartData2: postchart
                })
            });  
            
            
    }
    
    state = {
        testdata: [],
        chartData: {},
        testdata2: [],
        chartData2: {}
    }
    
    onLabelchange = (val) => {
        let newLabel;
        if (val === "usa") {
            newLabel = ['Boston', 'Vegas', 'Los', 'Miami','Haiti']
        }
        if (val === "india") {
            newLabel = ['Mumbai', 'Delhi', 'Kolkata', 'Bangalore','Hyderabad']
        }
        if (val === "uk") {
            newLabel = ['Manchester', 'London', 'Swansea', 'Liverpool','NewCastle']
        }
        let newChartdata = {
            ...this.state.chartData,
            labels: newLabel
        }
        this.setState({
            chartData: newChartdata
        })
    }


    onDatachange = (val) => {
        
        if (val === "newmember") {
            let grpId = this.props.match.params.id;
            let chart = {
                labels: [],
                datasets: [{
                    label: 'New Members',
                    data: [],
                    backgroundColor: 'blue'
                }]
            }
            axios.get('/groups/' + grpId + '/members/new?period=10')
                .then(response => {
                    this.setState({testdata: response.data})
                    
                    this.state.testdata.map(item => {
                        chart.labels.push(item.date.split("T")[0])
                        chart.datasets[0].data.push(item.count)
                    })
                    console.log(chart)
                    this.setState({
                        chartData: chart
                    })
                });  
            
        }
        if (val === "current") {
            let grpId = this.props.match.params.id;
        let chart = {
            labels: [],
            datasets: [{
                label: 'Current Members',
                data: [],
                backgroundColor: 'blue'
            }]
        }
        axios.get('/groups/' + grpId + '/members/total?period=10')
            .then(response => {
                this.setState({testdata: response.data})
                
                this.state.testdata.map(item => {
                    chart.labels.push(item.date.split("T")[0])
                    chart.datasets[0].data.push(item.count)
                })
                console.log(chart)
                this.setState({
                    chartData: chart
                })
            });  
        
        }
        if (val === "left") {
            let grpId = this.props.match.params.id;
        let chart = {
            labels: [],
            datasets: [{
                label: 'Members Left',
                data: [],
                backgroundColor: 'blue'
            }]
        }
        axios.get('/groups/' + grpId + '/members/left?period=10')
            .then(response => {
                this.setState({testdata: response.data})
                
                this.state.testdata.map(item => {
                    chart.labels.push(item.date.split("T")[0])
                    chart.datasets[0].data.push(item.count)
                })
                console.log(chart)
                this.setState({
                    chartData: chart
                })
            });  
        
        }
    }


    render() {
        return (
            <Layout>
            <Sider width={200} className="site-layout-background">
                <Sidebar default="2" grpId={this.props.match.params.id} />
            </Sider>
            <Content style={{ padding: '20px 50px' }}>
            <div style={{ position: 'relative', height: '50vh', width: '50vw', marginBottom: '40px' }}>
            <Charts labelChange={(value) => this.onLabelchange(value)} 
                dataChange={(value) => this.onDatachange(value)} 
                dataset={this.state.chartData}
             />
            </div>
            <div style={{ position: 'relative', height: '50vh', width: '50vw' }}>
            <Charts labelChange={(value) => this.onLabelchange(value)} 
                dataChange={(value) => this.onDatachange(value)} 
                dataset={this.state.chartData2} 
            />
            </div>
            {/* <div style={{position: 'relative', height: '50vh', width: '50vw'}}>
                <button onClick={this.onLabelchange}>Change Label</button>
                <button onClick={this.onDatachange}>Change Data</button>
                <Bar 
                    data={this.state.chartData}
                    options={{maintainAspectRatio: false}}
                />
            </div> */}
            </Content>
            </Layout>
        )
    }
}

export default Engagement;