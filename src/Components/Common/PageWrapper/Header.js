import React, { useState } from "react";
import { Layout, Icon, Button } from "antd";
import IncomeMobel from "../Forms/IncomeMobel";
// import "../pages/Home/Home.scss";

const Header = ({ toggleSider, collapsed }) => {
  const [state, setState] = useState({
    modelVisible: false
  });

  const toggleModel = () =>
    setState(state => ({
      modelVisible: !state.modelVisible
    }));

  return (
    <Layout.Header Header style={{ background: "#fff", padding: 0 }}>
      <div className="Header-div">
        <Icon
          className="trigger"
          type={collapsed ? "menu-unfold" : "menu-fold"}
          onClick={toggleSider}
          color="#000000"
        />

        <div className="">
          {/*----------------------------------------------------------------
          -----------------------Income Button-------------------------------
          -------------------------------------------------------------------  */}
          <Button
            type="primary"
            icon="plus"
            style={{ marginRight: 20 }}
            size="large"
            onClick={toggleModel}
          >
            Aavk
          </Button>
          {/*----------------------------------------------------------------
          -----------------------Expense Button-------------------------------
          -------------------------------------------------------------------  */}
          <Button
            type="primary"
            type="danger"
            icon="minus"
            size="large"
            onClick={toggleModel}
          >
            javk
          </Button>
        </div>
      </div>

      <IncomeMobel visible={state.modelVisible} toggleModel={toggleModel} />
    </Layout.Header>
  );
};

export default Header;
