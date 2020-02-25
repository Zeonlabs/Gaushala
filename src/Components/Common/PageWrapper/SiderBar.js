import React, { Component } from 'react';
import { Layout, Menu, Icon } from "antd";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import routes from "../../../js/Routes";

const PandaSvg = () => (
  <svg  space="preserve" viewBox="0 0 1024 1024" width="45px" height="49px" style={{verticalAlign:'middle'}} viewBox="0 0 588.619 588.619" fill="currentColor" ><g  transform="matrix(-1 0 0 1 588.619 0)"><g>
    <g >
      <path d="M584.839,185.996c-3.807-2.946-8.156-5.606-12.692-7.124c-12.362-4.133-23.444-10.131-32.592-19.507    c-0.804-0.824-1.697-1.571-2.599-2.289c-2.391-1.901-4.855-3.66-7.377-5.308c3.538-3.835,5.981-8.564,6.879-13.864    c0.258-1.542,0.404-3.056,0.437-4.549c0.481-1.73,0.702-3.55,0.608-5.406c-0.494-9.922-7.638-18.882-17.527-22.105    c-2.914-0.951-5.847-1.942-8.609-3.248c-8.372-3.961-10.942-10.049-4.435-17.862c0.098-0.118,0.105-0.31,0.159-0.473    c-7.271,1.485-12.077,8.246-11.021,15.447c0.959,6.536,5.108,10.535,10.616,13.477c6.356,3.395,8.164,9.204,4.631,15.508    c-0.869,1.55-2.04,2.938-3.272,4.496c-0.746,0.388-1.444,0.894-2.068,1.514c-1.195,1.191-2.387,2.379-3.582,3.57    c-2.595-1.012-5.21-1.987-7.834-2.934c-7.312-2.636-14.741-2.338-22.012,0.542c-3.215,1.273-6.405,2.62-9.669,3.758    c-0.812,0.281-2.146,0.232-2.763-0.261c-7.434-5.969-7.956-16.12-1.212-22.832c1.359-1.351,2.913-2.513,4.439-3.676    c5.479-4.182,10.371-8.915,13.88-14.908c6.871-11.742,2.604-22.208-10.979-27.446c0.682,1.628,1.363,3.081,1.897,4.582    c2.436,6.805,0.869,11.95-4.965,16.202c-1.314,0.958-2.705,1.909-4.203,2.509c-6.952,2.782-13.945,5.471-20.946,8.135    c-6.842,2.603-13.688,5.173-19.389,9.984c-7.192,6.067-9.028,13.313-4.716,21.616c2.276,4.382,5.479,8.327,8.572,12.224    c2.235,2.815,4.981,5.223,7.556,7.866h-23.104c-0.155,0.29-0.311,0.583-0.47,0.874c5.806,4.467,11.611,8.935,17.564,13.513    c-6.152,4.647-12.403,9.417-18.728,14.084c-0.686,0.506-1.803,0.445-2.729,0.6c-6.716,1.097-13.562,1.697-20.131,3.378    c-14.165,3.619-27.014,10.526-39.927,17.173c-13.533,6.964-27.025,13.55-42.786,14.439c-18.809,1.061-37.548,3.375-56.336,4.876    c-12.367,0.987-24.766,1.893-37.165,2.113c-12.587,0.225-25.194-0.282-37.781-0.779c-5.157-0.204-10.302-1.873-15.418-1.709    c-6.283,0.204-12.517,1.685-18.792,2.472c-1.399,0.176-3.133,0.196-4.276-0.461c-16.373-9.413-33.333-17.638-50.873-24.586    c-15.108-5.985-30.629-10.176-47.193-8.796c-16.345,1.363-27.377,10.587-31.237,26.446c-1.62,6.655-0.314,12.836,4.088,17.867    c10.502,12.003,23.905,18.115,39.911,18.176c2.648,0.008,5.295-0.625,7.943-0.959c-3.978,2.419-8.021,4.635-12.211,6.524    c-4.157,1.873-8.462,3.419-12.725,5.116c16.209,5.757,47.046-4.99,54.721-25.194c-17.96,4.59-34.395-0.677-50.616-9.086    c1.521,4.643,2.941,9.192,4.557,13.676c0.261,0.727,1.322,1.302,2.134,1.661c3.386,1.501,6.822,2.893,10.417,4.402    c-0.412,0.257-0.551,0.424-0.682,0.416c-15.006-1.008-27.312-7.291-36.74-19.021c-2.171-2.701-3.378-5.941-2.66-9.45    c1.191-5.79,3.599-10.987,8.527-14.606c7.711-5.659,16.504-5.646,25.443-4.651c11.958,1.33,22.677,6.316,33.485,11.179    c13.199,5.94,23.472,15.524,33.419,25.516c-2.036,2.84-4.125,5.374-5.806,8.156c-9.425,15.63-12.134,33.027-13.081,50.849    c-0.693,13.117,1.648,25.863,4.896,38.479c2.281,8.862,1.783,17.218-4.427,24.468c-3.064,3.578-6.148,7.214-9.686,10.29    c-5.802,5.043-11.918,9.727-18.018,14.41c-3.431,2.636-5.108,5.659-3.48,9.968c0.269,0.714,0.412,1.481,0.628,2.216    c6.238,21.285,3.778,40.922-11.146,58.132c-1.138,1.313-0.73,2.153,0.069,3.227c2.987,4.015,7.01,6.496,11.718,8.001    c2.615,0.837,6.12,1.016,7.564,2.823c1.575,1.975,1.089,5.517,1.787,8.303c0.286,1.139,1.085,2.566,2.056,3.048    c8.882,4.415,18.291,6.476,28.222,5.382c2.676-0.294,5.288-1.184,8.633-1.963c-2.007-3.243-3.194-6.254-5.295-8.339    c-5.239-5.19-10.914-9.939-16.365-14.921c-0.934-0.853-2.113-1.873-2.354-2.995c-4.072-18.809-1.396-36.1,12.656-50.221    c7.315-7.355,15.32-14.026,23.032-20.987c4.137-3.737,8.449-7.295,12.427-11.191c0.739-0.722,1.212-1.317,1.457-1.86    c1.901-1.375,3.799-2.75,5.7-4.125c0.767-0.257,1.521-0.559,2.268-0.914c6.928,6.806,14.154,13.325,21.408,19.817    c5.263,4.708,9.29,10.229,11.889,16.801c3.978,10.058,4.182,20.421,2.717,30.959c-0.11,0.8,0.273,2.073,0.877,2.51    c13.06,9.449,24.072,20.983,34.011,33.565c7.001,8.862,13.24,18.222,16.789,29.099c0.583,1.791,1.045,3.623,1.706,5.937    c1.612-1.399,2.934-2.468,4.166-3.639c0.833-0.792,1.481-1.775,2.301-2.587c2.322-2.289,3.509-2.102,4.982,0.73    c1.065,2.048,2.219,4.055,3.162,6.16c2.35,5.247,6.708,7.744,12.028,8.895c8.168,1.767,16.047,0.38,23.762-2.387    c8.38-3.007,8.845-4.668,3.166-11.783c-4.965-6.222-11.318-10.91-18.45-14.048c-7.381-3.243-13.015-8.314-18.348-14.006    c-1.053-1.122-2.224-2.139-3.272-3.265c-6.94-7.47-13.941-14.888-20.751-22.473c-2.644-2.945-4.508-6.348-4.729-10.575    c-0.539-10.277-1.493-20.538-1.962-30.82c-0.58-12.66-1.089-25.324-1.457-37.993c3.309,1.347,6.903,2.143,10.649,2.277l2.477,0.09    c1.599,0.828,2.819,2.162,4.002,3.717c5.936,7.784,12.709,14.721,21.338,19.584c4.867,2.745,10.041,4.557,15.973,5.022    c-3.228-7.577-6.646-14.729-5.5-23.158c1.085,0,2.028,0.004,2.966,0c6.161-0.033,12.342,0.257,18.47-0.167    c11.962-0.833,23.675,0.424,35.031,4.043c10.338,3.297,20.437,7.336,30.689,10.901c9.873,3.436,19.931,5.202,30.241,1.987    c0.734-0.229,1.48-0.551,2.183-0.946c1.673-0.229,3.346-0.481,5.01-0.727c3.235-0.371,6.463-0.588,9.707-0.42    c0.918,0.204,1.827,0.444,2.725,0.71c2.302,1.395,4.513,2.685,6.431,4.316c11.946,10.159,23.79,20.437,35.532,30.832    c1.714,1.519,3.068,3.742,3.909,5.9c4.442,11.399,6.279,23.37,6.903,35.504c0.15,2.917,1.301,4.562,3.668,5.479    c1.852,0.718,3.892,1.285,5.854,1.302c3.317,0.024,6.634-0.445,10.094-0.719c0.232,0.812,0.461,1.734,0.759,2.636    c1.371,4.101,2.718,8.205,4.158,12.277c0.71,2.003,1.966,2.966,4.377,2.733c4.305-0.421,8.646-0.388,12.971-0.604    c7.572-0.379,15.141-0.799,22.95-1.216c-0.286-0.783-0.42-1.334-0.678-1.819c-6.087-11.358-15.247-19.254-27.348-23.521    c-4.361-1.538-8.099-3.745-10.706-7.421c-2.542-3.587-4.863-7.401-6.736-11.375c-4.39-9.319-5.512-19.548-7.707-29.482    c-2.166-9.804-4.896-19.421-11.689-27.271c-0.51-0.588-0.832-1.339-1.191-1.93c2.338-0.139,4.443-0.082,6.491-0.416    c6.435-1.045,11.828-4.436,17.141-7.936c3.554-2.347,4.309-2.232,7.548,0.281c6.903,5.356,14.309,9.551,23.269,10.628    c9.073,1.09,9.604,1.901,10.184,10.89c0.249,3.864,1.293,5.292,4.684,6.394c3.496,1.139,3.9,2.325,1.326,5.227    c-1.51,1.701-3.398,3.101-5.264,4.438c-1.611,1.159-3.423,2.04-5.39,3.187c2.493,3.289,4.615,6.663,7.3,9.507    c5.067,5.369,10.232,10.697,15.817,15.504c2.244,1.93,5.618,2.893,8.638,3.477c3.149,0.611,4.717-0.719,5.219-3.889    c0.461-2.913,0.726-5.969,0.358-8.87c-0.53-4.17-1.619-8.286-2.651-12.379c-1.339-5.312-1.648-10.433,0.049-15.858    c2.986-9.539-1.18-18.115-9.825-23.203c-8.106-4.77-16.006-9.931-23.713-15.324c-3.831-2.681-7.181-6.124-8.979-10.706    c-0.747-1.897-0.425-3.17,1.064-4.782c5.406-5.847,11.257-11.469,15.614-18.05c7.181-10.845,7.854-23.436,6.312-35.937    c-1.493-12.093-3.998-24.06-5.883-36.108c-0.808-5.161-1.171-10.388-1.689-15.149c11.094-3.195,19.923-8.086,24.431-18.581    c1.53-3.562,4.228-5.475,7.932-5.838c3.529-0.347,7.152-0.787,10.633-0.363c4.08,0.498,7.368-0.653,10.918-2.424    c3.407-1.697,4.872-3.631,4.048-7.438c-0.768-3.553,0.069-6.642,2.814-9.441c1.894-1.934,3.19-4.578,4.329-7.099    C589.552,193.43,588.98,189.203,584.839,185.996z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#FFFFFF" />
    </g>
  </g></g> </svg>

);
const {  Sider } = Layout;


class SiderBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      collapsed: false,

    }
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };


  render() {
    return (
      <Layout.Sider trigger={null} collapsible collapsed={this.props.collapsed} width={320}>
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
        ----------------------------Income-Button-Sider------------------------
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
              <PandaSvg class="menu-list-icon bull-icon" />
              {/* <Icon className="menu-list-icon" type="twitter" /> */}
              <span className="menu-list-title bull-titel">pxu nI yadI</span>
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