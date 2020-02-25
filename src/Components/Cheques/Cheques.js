import React, { Component } from "react";
import { connect } from "react-redux";
import PageWrapper from "../Common/PageWrapper/PageWrapper";
import moment from "moment";
import "./Cheque.scss";
import { Button, Icon } from "antd";
import Index from "./AddCheque/Index";
import ListingTable from "./ListingTable";
import FilterDatas from "./FilterData";

export class Cheques extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openPopup: false,
      showFilter: false
    };
  }

  handelPopup = () => {
    this.setState({
      openPopup: !this.state.openPopup
    });
  };

  handelFilterShow = () => {
    this.setState({
      showFilter: !this.state.showFilter
    });
  };

  render() {
    return (
      <PageWrapper>
        <Index
          openPopup={this.state.openPopup}
          handelEmployeePopup={this.handelPopup}
        />
        <div className="header-button">
        <Button
          shape="squre"
          size="large"
          type="primary"
          onClick={this.handelFilterShow}
          style={{ marginBottom: 30 }}
        >
          <Icon type="filter" theme="filled" style={{ fontSize: 17 }} />
          fIL3r
        </Button>
        <FilterDatas
          visible={this.state.showFilter}
          onClose={this.handelFilterShow}
        />
          <Button
            className="button-text-size"
            type="primary"
            icon="printer"
            style={{ marginLeft: 20 }}
            size="large"
            onClick={this.handelPopup}
          >
            Nyu cek ip/N3
          </Button>
        </div>
        <ListingTable />
      </PageWrapper>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Cheques);
