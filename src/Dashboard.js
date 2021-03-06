import React, { Component } from 'react';
import { Layout } from 'antd';
import ScatterPlot from './views/ScatterPlot';
import FamilySelector from './views/FamilySelector';
import FamilyTree from './views/FamilyTree';
import AttributesHeatmap from './views/AttributesHeatmap';
import RelativeCompare from './views/RelativeCompare';
import './dashboard.css';

const { Sider, Content, Footer } = Layout;

export default class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <Layout style={{ height:' 95vh' }}>
                    <Sider width={300} style={{backgroundColor:'#eee'}}>
                        <Content style={{ height: '45%' }}>
                            <ScatterPlot />
                        </Content>
                        <Content style={{ height: '55%' }}>
                            <FamilySelector />
                        </Content>
                    </Sider>
                    <Layout style={{ height: '100%' }}>
                        <Content style={{ height: '40%' }}>
                            <FamilyTree/>
                        </Content>
                        <Layout>
                            <Content>
                                <AttributesHeatmap />
                            </Content>
                            <Sider width={300} style={{backgroundColor:'#eee'}}>
                                <RelativeCompare />
                            </Sider>
                        </Layout>
                    </Layout>
                </Layout>
                <Layout  style={{ height: '5vh' }}>
                    <Footer>
                        <div style={{textAlign: "center"}}>
                            Source Code <a href='https://github.com/sdq/react-d3-dashboard'>https://github.com/sdq/react-d3-dashboard</a>;
                            Author <a href='https://sdq.ai'>sdq</a>;
                        </div>
                    </Footer>
                </Layout>
            </div>
        )
    }
}
