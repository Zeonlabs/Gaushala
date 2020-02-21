import React, { Component } from 'react';
import { Layout, Menu, Icon } from "antd";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import routes from "../../../js/Routes";
  
class SiderBar extends Component {
    constructor(props) {
      super(props)
  
      this.state = {
           
      }
    }
  
    render() {
      return (
        <Layout.Sider trigger={null} collapsible collapsed={this.props.collapsed} width={250}>
    <div className="logo">
      <h1
        style={{
          color: "#ffffff"
        }}
      >
        sItaram gOxa5a 3\S3
      </h1>
    </div>
    <Menu
      theme="dark"
      mode="inline"
      className="sidebar-menuItem"
      selectedKeys={[this.props.location.pathname]}
    >
      <Menu.Item key={routes.dashboard}>
          <Link to={routes.dashboard}>
            <Icon className="menu-list-icon" type="layout" theme="filled" />
            <span className="menu-list-title">s>padIt Aheval</span>
          </Link>
        </Menu.Item>
        {/* -----------------------------------------------------------------
        -------------------------Income-Button-Sider----------------------
        --------------------------------------------------------------------- */}
        <Menu.Item key={routes.charity}>
          <Link to={routes.charity}>
            <Icon className="menu-list-icon" type="rise" />
            <span className="menu-list-title">Aavk rIpO3</span>
          </Link>
        </Menu.Item>
        {/* -----------------------------------------------------------------
        -------------------------Expenses-Button-Sider----------------------
        --------------------------------------------------------------------- */}

        <Menu.Item key={routes.expences}>
          <Link to={routes.expences}>
            <Icon className="menu-list-icon" type="fall" />
            <span className="menu-list-title">javk rIpO3</span>
          </Link>
        </Menu.Item>
        {/* -----------------------------------------------------------------
        -------------------------Cheque-Button-Sider----------------------
        --------------------------------------------------------------------- */}
        <Menu.Item key={routes.cheques}>
          <Link to={routes.cheques}>
            <Icon className="menu-list-icon" type="audit" />
            <span className="menu-list-title">cek p/IN3</span>
          </Link>
        </Menu.Item>
        {/* -----------------------------------------------------------------
        -------------------------Animal-Button-Sider----------------------
        --------------------------------------------------------------------- */}
        <Menu.Item key={routes.animal}>
          <Link to={routes.animal}>
            <Icon className="menu-list-icon" type="twitter" />
            <span className="menu-list-title">pxu nI yadI</span>
          </Link>
        </Menu.Item>
        {/* -----------------------------------------------------------------
        -------------------------Employees-Button-Sider----------------------
        --------------------------------------------------------------------- */}
        <Menu.Item key={routes.employees}>
          <Link to={routes.employees}>
            <Icon className="menu-list-icon" type="solution" />
            <span className="menu-list-title">kmRcarI nI yadI</span>
          </Link>
        </Menu.Item>
        {/* -----------------------------------------------------------------
        -------------------------TrustMembers-Button-Sider----------------------
        --------------------------------------------------------------------- */}
        <Menu.Item key={routes.trustmembers}>
          <Link to={routes.trustmembers}>
            <Icon className="menu-list-icon" type="team" />
            <span className="menu-list-title">sWy7I nI yadI</span>
          </Link>
        </Menu.Item>
        {/* -----------------------------------------------------------------
        -------------------------Notes-Button-Sider--------------------------
        --------------------------------------------------------------------- */}
        <Menu.Item key={routes.notes}>
          <Link to={routes.notes}>
            <Icon className="menu-list-icon" type="book" />
            <span className="menu-list-title">nO>6</span>
          </Link>
        </Menu.Item>
        {/* -----------------------------------------------------------------
        -------------------------Setting-Button-Sider--------------------------
        --------------------------------------------------------------------- */}
        <Menu.Item key={routes.settingpage}>
          <Link to={routes.settingpage}>
            <Icon className="menu-list-icon" type="setting" />
            <span className="menu-list-title">sei3>g</span>
          </Link>
        </Menu.Item>
    </Menu>
  </Layout.Sider>
      )
    }
  }

export default withRouter(SiderBar);