import { Modal } from "antd";
import React, { Component } from "react";
import "../components/Rough/Rough.css";
import CreateRoughs from "../components/Rough/CreateRough";
import RoughSortings from "../components/RoughSorting/RoughSorting";
import IssueCarats from "../components/Office/Issue";
// import ReturnCarats from "../components/Office/Return";
import EditableTable from "../components/RoughSorting/EditableTable";
import AddPacketModel from "../components/PacketPatition/AddPacketModel";
class Models extends Component {
  state = { visible: true };

  handleOk = e => {
    console.log("sdadsadasd", e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    this.props.onCancel();
    console.log(e);
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <div>
        <Modal
          title={this.props.title}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={false}
          maskClosable={false}
          className={this.props.type === "Sorting" ? "addSorting" : ""}
        >
          {this.props.type === "AddRough" ? (
            <CreateRoughs
              addRough={this.props.addRough}
              closeBox={this.handleCancel}
            />
          ) : (
            ""
          )}
          {this.props.type === "Sorting" ? (
            <RoughSortings
              data={this.props.data}
              closeBox={this.handleCancel}
            />
          ) : (
            ""
          )}
          {this.props.type === "AddPacket" ? (
            <AddPacketModel closeBox={this.handleCancel} />
          ) : (
            ""
          )}
          {this.props.type === "IssueCarat" ? (
            <IssueCarats closeBox={this.handleCancel} />
          ) : (
            ""
          )}
          {this.props.type === "ReturnCarat" ? (
            <IssueCarats type="return" closeBox={this.handleCancel} />
          ) : (
            ""
          )}
        </Modal>
      </div>
    );
  }
}

export default Models;
