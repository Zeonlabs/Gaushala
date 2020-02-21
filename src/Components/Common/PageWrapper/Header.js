import React, { useState } from "react";
import { Layout, Icon, Button } from "antd";
import IncomeMobel from "../Forms/IncomeMobel";
// import "./Sider.scss";

const Header = ({ toggleSider, collapsed, header, onClick }) => {
  const [state, setState] = useState({
    incomeModelVisible: false,
    expenseModelVisible: false
  });

  const toggleIncomeModel = () =>
    setState(state => ({
      incomeModelVisible: !state.incomeModelVisible
    }));
  const toggleExpenseModel = () =>
    setState(state => ({
      expenseModelVisible: !state.expenseModelVisible
    }));

  // const toggleModel2 = () =>
  //   setState(state => ({
  //     modelVisible: !state.modelVisible
  // }));


  return (
    <Layout.Header style={{ background: "#fff", padding: 0 ,height:"70px"}}>
      <div className="Header-div" style={{padding: "5px 20px",}}>
        <Icon
          className="trigger"
          type={collapsed ? "menu-unfold" : "menu-fold"}
          onClick={toggleSider}
          color="#000000"
        />
        {header ? (
          <div>
            <Button type="primary" onClick={() => onClick()}>
              <Icon type="left" />
              pa05nI Sk/In pr jva
            </Button>
          </div>
        ) : (
          ""
        )}
        <div className="">
          {/*----------------------------------------------------------------
          -----------------------Income Button-------------------------------
          -------------------------------------------------------------------  */}
          <Button
            className="button-text-size"
            type="primary"
            icon="plus"
            style={{ marginRight: 20 }}
            size="large"
            onClick={toggleIncomeModel}
          >
            Aavk
          </Button>
          {/*----------------------------------------------------------------
          -----------------------Expense Button-------------------------------
          -------------------------------------------------------------------  */}
          <Button
            className="button-text-size"
            type="primary"
            type="danger"
            icon="minus"
            size="large"
            onClick={toggleExpenseModel}
          >
            javk
          </Button>
        </div>
      </div>

      <IncomeMobel
        visible={state.incomeModelVisible}
        toggleModel={toggleIncomeModel}
      />
      <IncomeMobel
        visible={state.expenseModelVisible}
        toggleModel={toggleExpenseModel}
        type="expense"
      />
    </Layout.Header>
  );
};

export default Header;
