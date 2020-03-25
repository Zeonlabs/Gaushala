import React, { Component } from "react";
import { connect } from "react-redux";
import PageWrapper from "../Common/PageWrapper/PageWrapper";
import moment from "moment";
import "./Cheque.scss";
import { Button, Icon, message } from "antd";
import {
  getCheque,
  editCheque,
  deleteCheque,
  addCheque,
  filterCheque
} from "../../Actions/Cheque";
import Index from "./AddCheque/Index";
import ListingTable from "./ListingTable";
import FilterDatas from "./FilterData";

export class Cheques extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openPopup: false,
      showFilter: false,
      data: "",
      pagination: {
        page: 1,
        limit: 20
      },
      editData: "",
      income: false
    };
  }

  handelPopup = () => {
    this.setState({
      openPopup: !this.state.openPopup,
      editData: ""
    });
  };

  handelFilterShow = () => {
    this.setState({
      showFilter: !this.state.showFilter
    });
  };

  componentDidMount = () => {
    const pagination = {
      page: 1,
      limit: 20
    };
    this.props.getCheque(pagination).then(res => {
      console.log("Employees -> componentDidMount -> res", res);
      this.setState({
        data: res.docs
      });
    });
  };

  handelShowPopup = () => {
    this.setState({
      openPopup: !this.state.openPopup,
      income: !this.state.income
    });
  };

  handelEdit = record => {
    this.setState({
      openPopup: !this.state.openPopup,
      editData: record,
      income: true
    });
  };

  handelDataAdd = data => {
    console.log("Employees -> handelDataAdd -> data", data);
    this.props.addCheque(data).then(res => {
      this.props.getCheque(this.state.pagination).then(res => {
        this.setState({
          data: res.docs
        });
        this.handelShowPopup();
      });
    });
  };

  handelAddEdit = (id, data) => {
    console.log("TrustMembers -> handelAddEdit -> data", id, data);
    this.props.editCheque(id, data).then(res => {
      this.props.getCheque(this.state.pagination).then(res => {
        this.setState({
          data: res.docs
          // income: false
        });
        this.handelShowPopup();
      });
    });
  };

  handelDelete = record => {
    console.log("Income -> handleDelete -> key, record", record);
    this.props.deleteCheque(record._id).then(res => {
      this.props
        .getCheque(this.state.pagination)
        .then(res => {
          console.log("res in a income model =->", res);
          this.setState({
            data: res.docs
          });
        })
        .catch(e => message.error(e));
    });
  };

  handelFilter = data => {
    console.log("Income -> handelFilterGet -> data", data);
    this.props
      .filterCheque(data)
      .then(res => {
        console.log("res in a income model =->", res);
        this.setState({
          data: res
        });
      })
      .catch(e => message.error(e));
  };

  handelResetFilter = () => {
    const data = {};
    this.handelFilter(data);
  };

  paginate = page => {
    this.setState({
      pagination: {
        page,
        limit: 20
      }
    });
  };

  render() {
    const { income, editData } = this.state;
    return (
      <PageWrapper title="cek p/IN3">
        <Index
          openPopup={this.state.openPopup}
          handelEmployeePopup={this.handelShowPopup}
          handelEdit={this.handelAddEdit}
          submit={this.handelDataAdd}
          data={income ? editData : ""}
          type={income ? "edit" : "add"}
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
          <Button
            shape="squre"
            size="large"
            type="primary"
            onClick={this.handelResetFilter}
            style={{ marginBottom: 30 }}
          >
            <Icon type="close-circle" theme="filled" style={{ fontSize: 17 }} />
            Clear
          </Button>
          <FilterDatas
            visible={this.state.showFilter}
            onClose={this.handelFilterShow}
            submit={this.handelFilter}
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
        <div className="table">
          <ListingTable
            data={this.state.data || []}
            // editUSer={this.handelEdit}
            editPopupOpen={this.handelEdit}
            delete={this.handelDelete}
            pagination={this.paginate}
            current={this.state.pagination.page}
            pageSize={this.state.pagination.limit}
          />
        </div>
      </PageWrapper>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps, {
  getCheque,
  editCheque,
  deleteCheque,
  addCheque,
  filterCheque
})(Cheques);
