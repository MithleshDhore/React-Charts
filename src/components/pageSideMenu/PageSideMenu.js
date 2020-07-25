import React, { Fragment } from 'react';
import intl from 'react-intl-universal';
import { Menu, Button, Layout } from 'antd';
import { MenuItems } from './MenuItems';
import isEmpty from 'lodash/isEmpty'
import './PageSideMenu.css'
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

class PageSideMenu extends React.Component {
    state = {
        collapsed: true,
    };

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    onMenuItemClick = item => {
        const getSelectedRoute = MenuItems.find(menuItem => menuItem.key === item.key);
        if (!isEmpty(getSelectedRoute)) {
            this.props.routeToItem(getSelectedRoute.route);
        }
    };

    render() {
        return (
            <Fragment>
                <Sider
                    collapsible
                    collapsed={this.state.collapsed}
                    onCollapse={this.onCollapse}
                    className="primary-layout-sider"
                    defaultCollapsed={true}
                    collapsedWidth={50}
                >
                    <Button type="default" onClick={this.toggleCollapsed} className="menu-btn">
                        {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
                    </Button>
                    <Menu
                        defaultSelectedKeys={['1']}
                        mode="inline"
                        inlineCollapsed={this.state.collapsed}
                    >
                        {MenuItems.map(item => (
                            <Menu.Item icon={item.icon} id={item.key} onClick={() => this.onMenuItemClick(item)} key={item.key}>
                                {intl.get(item.label)}
                            </Menu.Item>
                        )
                        )}
                    </Menu>
                </Sider>
            </Fragment>
        );
    }
}
export default PageSideMenu;
