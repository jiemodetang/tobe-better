import { Layout, Menu, Select } from 'antd';
import { Link, setLocale,getLocale } from 'umi'
import React, { useState } from 'react';
import styles from './index.less';
import {intl} from '../utils/commonFun'


const { Header, Content, Footer } = Layout;

const { Option } = Select;
function BasicLayout(props: { location: any; children: React.ReactNode; }) {

const menuData = [
    { route: '/hero', name: intl('tobe_hero')},
    { route: '/parts', name: intl('tobe_article')},
];
    //从属性中取出当前的路由
    const {
        location: { pathname },
        children,
    } = props;
    const [value,setValue]  = useState(getLocale())
    const handleChange = (value: any) => {
        setValue(value)
        setLocale(value, false);
    }
    return (
        <Layout>
            <Header>
                <div className={styles.logo}>tobe-better</div>

                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={[pathname]}
                    style={{ lineHeight: '64px' }}
                >
                    {menuData.map(menu => (
                        <Menu.Item key={`/${menu.route}`}>
                            <Link to={menu.route}>{menu.name}</Link>
                        </Menu.Item>
                    ))}

                    <div key="3" style={{float: 'right'}}>
                        <span>{intl('tobe_language')}</span>&nbsp;&nbsp;
                        <Select defaultValue={value} style={{ width: 120 }} onChange={handleChange}>
                            <Option value="zh-CN">中文</Option>
                            <Option value="en-US">English</Option>
                        </Select>
                    </div>
                </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                    {props.children}
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Umi 入门教程 Created by zzz</Footer>
        </Layout>
    );
}

export default BasicLayout;