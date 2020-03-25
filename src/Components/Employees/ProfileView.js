import React, { Component } from "react";
import { Drawer } from "antd";
import { connect } from "react-redux";
import { getEmployeeDocs } from "../../Actions/Employee";

class ProfileView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userDocs: ""
    };
  }

  componentDidUpdate = prevProps => {
    if (prevProps.visible !== this.props.visible)
      this.props.getEmployeeDocs(this.props.data._id).then(res => {
        console.log(
          "ProfileView -> componentDidMount -> getEmployeeDocs",
          getEmployeeDocs
        );
        console.log("this is  a log in a get documents", res);
        this.setState({
          userDocs: res
        });
      });
  };

  render() {
    const { visible, onClose, data } = this.props;
    console.log("ProfileView -> render -> data", data);
    return (
      <div>
        <Drawer
          visible={visible}
          width={540}
          placement="right"
          closable={false}
          onClose={onClose}
        >
          <p>{data.name}</p>
          <p>{data.phone}</p>
          <p>{data.address}</p>
          <p>{data.type}</p>
          {/* <img src={"data:image/jpeg;base64," + btoa(this.state.userDocs)} /> */}
        </Drawer>
      </div>
    );
  }
}

export default connect(null, { getEmployeeDocs })(ProfileView);
