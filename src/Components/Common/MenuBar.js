import { Layout, Menu, Icon } from "antd";

import React, { Component } from "react";
import "../../css/Home/Menubar.css";
import { withRouter } from "react-router";
import routes from "../../js/Routes";
import { Link } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;

class MenuBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: false
    };
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible>
          <div className="logo">
            <h2>સીતારામ ગો શાળા</h2>
          </div>
          <Menu theme="dark" mode="inline" selectedKeys={[this.props.location.pathname]}>
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
        </Sider>
        <Layout>
          <Header style={{ background: "#fff", padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
              onClick={this.toggle}
            />
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              background: "#fff",
              minHeight: "calc(100vh - 112px)"
            }}
          >
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(MenuBar);
