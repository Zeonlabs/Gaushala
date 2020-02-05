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
          <Icon type="dashboard" />
          <span>Dashboard</span>
        </Link>
      </Menu.Item>
      <Menu.Item key={routes.charity}>
        <Link to={routes.charity}>
          <Icon type="fund" />
          <span>Charity income</span>
        </Link>
      </Menu.Item>
      <Menu.Item key={routes.expences}>
        <Link to={routes.expences}>
          <Icon type="file-done" />
          <span>Expenses</span>
        </Link>
      </Menu.Item>
      <Menu.Item key={routes.cheques}>
        <Link to={routes.cheques}>
          <Icon type="schedule" />
          <span>Cheques</span>
        </Link>
      </Menu.Item>
      <Menu.Item key={routes.animal}>
        <Link to={routes.animal}>
          <Icon type="qq" />
          <span>Animal</span>
        </Link>
      </Menu.Item>
      <Menu.Item key={routes.employees}>
        <Link to={routes.employees}>
          <Icon type="team" />
          <span>Employees</span>
        </Link>
      </Menu.Item>
      <Menu.Item key={routes.notes}>
        <Link to={routes.notes}>
          <Icon type="file-text" />
          <span>Notes</span>
        </Link>
      </Menu.Item>
      <Menu.Item key={routes.trustmembers}>
        <Link to={routes.trustmembers}>
          <Icon type="user" />
          <span>Trust Members</span>
        </Link>
      </Menu.Item>
    </Menu>
  </Layout.Sider>
      )
    }
  }

export default withRouter(SiderBar);
