import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Input,
  Select,
  InputNumber,
  DatePicker,
  Form,
  Icon,
  Button,
  Modal,
  Radio,
  Row,
  Col,
  Divider
} from "antd";
import PageWrapper from "../Common/PageWrapper/PageWrapper";
import "./TrustMenbers.scss";
import Index from "./AddMember/Index";
import { FilterData } from "./FilterData";
import ListingTable from "./ListingTable";

const { RangePicker } = DatePicker;
const { Option } = Select;

function onChange(dates, dateStrings) {
  console.log("From: ", dates[0], ", to: ", dates[1]);
  console.log("From: ", dateStrings[0], ", to: ", dateStrings[1]);
}
export class TrustMembers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showAddPopup: false
    };
  }

  handelShowPopup = () => {
    this.setState({
      showAddPopup: !this.state.showAddPopup
    });
  };

  closeAddPopup = () => {
    this.setState({
      showAddPopup: false
    });
  };

  render() {
    return (
      <PageWrapper title="sWy7I nI yadI">
        <Index
          openPopup={this.state.showAddPopup}
          handelEmployeePopup={this.handelShowPopup}
        />
         <div className="filter-icon">
          <Icon type="filter" theme="filled" />
          <h3>rIpo3 fIL3r</h3>
        </div>
        
        <div className="filter-wrapper">
          <div className="filter-select-width">
            <FilterData />
          </div>
          <div className="filter-button-member">
            <Button
              size="default"
              htmlType="submit"
              icon="printer"
              style={{
                backgroundColor: "#505D6F",
                color: "#ffffff",
                height: "40px"
              }}
            >
              ip/N3
            </Button>

            <Button
              className="button-right button-text-size"
              type="primary"
              icon="user-add"
              style={{ marginLeft: "20px" }}
              onClick={this.handelShowPopup}
              size="large"
            >
              sWy ]mero
            </Button>
          </div>
        </div>
        <div className="listing-table-wrapper">
        <div className="table">
          <ListingTable />
        </div>
        </div>
      </PageWrapper>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TrustMembers);
