import React, { Component } from "react";
import { connect } from "react-redux";
import { Icon, Button, message } from "antd";
import PageWrapper from "../Common/PageWrapper/PageWrapper";
import "./TrustMenbers.scss";
import Index from "./AddMember/Index";
import { FilterData } from "./FilterData";
import ListingTable from "./ListingTable";
import {
  getMembers,
  editMembers,
  addMembers,
  deleteMembers,
  filterMembers
} from "../../Actions/TrustMembers";

// function onChange(dates, dateStrings) {
//   console.log("From: ", dates[0], ", to: ", dates[1]);
//   console.log("From: ", dateStrings[0], ", to: ", dateStrings[1]);
// }
export class TrustMembers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showAddPopup: false,
      // addPopup: false,
      data: "",
      pagination: {
        page: 1,
        limit: 20
      },
      editData: "",
      income: false
    };
  }

  componentDidMount = () => {
    const pagination = {
      page: 1,
      limit: 20
    };
    this.props.getMembers(pagination).then(res => {
      console.log("Employees -> componentDidMount -> res", res);
      this.setState({
        data: res.docs
      });
    });
  };

  handelShowPopup = () => {
    this.setState({
      showAddPopup: !this.state.showAddPopup,
      income: false
    });
  };

  handelEdit = record => {
    this.setState({
      showAddPopup: !this.state.showAddPopup,
      editData: record,
      income: true
    });
  };

  handelDataAdd = data => {
    console.log("Employees -> handelDataAdd -> data", data);
    this.props.addMembers(data).then(res => {
      this.props.getMembers(this.state.pagination).then(res => {
        this.setState({
          data: res.docs
        });
        this.handelShowPopup();
      });
    });
  };

  handelAddEdit = (id, data) => {
    console.log("TrustMembers -> handelAddEdit -> data", data);
    this.props.editMembers(id, data).then(res => {
      this.props.getMembers(this.state.pagination).then(res => {
        this.setState({
          data: res.docs
        });
        this.handelShowPopup();
      });
    });
  };

  handelDelete = record => {
    console.log("Income -> handleDelete -> key, record", record);
    this.props.deleteMembers(record._id).then(res => {
      this.props
        .getMembers(this.state.pagination)
        .then(res => {
          console.log("res in a income model =->", res);
          this.setState({
            data: res.docs
          });
        })
        .catch(e => message.error(e));
    });
  };

  handelFilter = value => {
    console.log("Employees -> handelFilter -> value", value);
    const data = {
      position: value === "All" ? "" : value
    };
    this.props.filterMembers(data).then(res => {
      console.log("Employees -> res", res);
      this.setState({
        data: res
      });
    });
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
    const { editData, income } = this.state;
    console.warn("TrustMembers -> render -> income", income);
    return (
      <PageWrapper title="sWy7I nI yadI">
        <Index
          openPopup={this.state.showAddPopup}
          handelEmployeePopup={this.handelShowPopup}
          handelEdit={this.handelAddEdit}
          submit={this.handelDataAdd}
          data={income ? editData : ""}
          type={income ? "edit" : "add"}
        />
        <div className="filter-icon">
          <Icon type="filter" theme="filled" />
          <h3>rIpo3 fIL3r</h3>
        </div>

        <div className="filter-wrapper">
          <div className="filter-select-width">
            <FilterData onFilterChange={this.handelFilter} />
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
        </div>
      </PageWrapper>
    );
  }
}

const mapStateToProps = state => ({
  ...state.Animals
});

export default connect(mapStateToProps, {
  getMembers,
  editMembers,
  addMembers,
  deleteMembers,
  filterMembers
})(TrustMembers);
