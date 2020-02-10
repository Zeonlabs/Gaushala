import React, { useState } from "react";
import { Layout } from "antd";
import "./PageWrapper.scss";
import SiderBar from "./SiderBar";
import Header from "./Header";

const { Content } = Layout;

const PageWrapper = props => {
  const [state, setState] = useState({
    collapsed: false
  });

  const toggleSider = () => {
    setState({
      collapsed: !state.collapsed
    });
  };

  return (
    <Layout className="page-layout">
      <SiderBar collapsed={state.collapsed} />
      <Layout>
        <Header toggleSider={toggleSider} collapsed={state.collapsed} />
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            background: "#fff",
            minHeight: 280
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default PageWrapper;
