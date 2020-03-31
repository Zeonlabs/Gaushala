import React, { Component } from "react";
import {
  Modal,
  Form,
  Input,
  DatePicker,
  Select,
  Radio,
  Button,
  InputNumber,
  Row,
  Col,
  Tag
} from "antd";
import "../../Common/Forms/IncomeModels.styles.scss";
import moment from "moment";
import Tables from "../../Common/Forms/table";
import { addCostAnimal } from "../../../Actions/Animal/TotalAnimal";
import { getAnimalChart } from "../../../Actions/ChartActions";
import NumericInput from "../../Common/Forms/InputNumber";
import { connect } from "react-redux";
import Index from "../Table";

const { Option } = Select;

class ResicentalAnimal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "cash",
      tableData: "",
      value: "",
      total: 0,
      animal_total: 0
    };
  }

  componentDidMount = () => {};

  componentDidUpdate = prevProps => {
    if (prevProps !== this.props) {
      const { data } = this.props;
      console.log("this is  aedit income modal ->", this.props);
      if (this.props.type) {
        this.setState({
          data: data
        });
        const total = parseInt(this.sumValuses(data.item), 10);
        if (!this.state.tableStatus) {
          this.setState({
            tableData: data.item,
            total
          });
        }
      }
      if (this.props.totalAnimalCount === 0) {
        this.props.getAnimalChart().then(res => {
          const total = res.stats.animal;
          delete total.big;
          delete total.small;
          const total_count = this.sumValuses(total);
          this.setState({
            animal_total: total_count
          });
        });
      } else {
        this.setState({
          animal_total: this.props.totalAnimalCount.animal_total
        });
      }
    }
  };

  onChange = value => {
    this.setState({ value });
  };

  sumArray = (total, num) => {
    return total + num;
  };

  costAnimalData = values => {
    console.log("ResicentalAnimal -> componentDidMount -> values", values);
    const date = moment(values.date).format("YYYY-MM-DD");
    const data = {
      date,
      total: this.state.total,
      // name: values.name,
      item: this.state.tableData
    };
    console.log("TCL: data", data);
    if (this.props.type) {
      this.props.submit(this.props.data._id, data);
    } else {
      this.props.addCostAnimal(data).then(res => this.props.toggleModel());
    }
  };

  handleSubmit = e => {
    console.log("TCL: e", e);
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.costAnimalData(values);
      }
    });
  };

  sumValuses = obj => Object.values(obj).reduce((a, b) => a + b);

  onTableSubmit = data => {
    console.log("TCL: onTableSubmit -> data", data);
    const total = parseInt(this.sumValuses(data), 10);
    this.setState({
      tableData: data,
      total
    });
  };

  onChangeType = e => {
    console.log("radio checked", e.target.value);
    this.setState({
      type: e.target.value
    });
  };

  onChangeSawingType = e => {};

  onChanges = value => {
    console.log(`selected ${value}`);
  };

  onBlur = () => {
    console.log("blur");
  };

  onFocus = () => {
    console.log("focus");
  };

  onSearch = val => {
    console.log("search:", val);
  };
  handleReset = () => {
    this.props.form.resetFields();
    this.props.toggleModel();
  };
  render() {
    // console.warn(
    //   "this is  a count of total animal in cost animal =>",
    //   this.props.totalAnimalCount
    // );
    const { type, data } = this.props;
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="income-model-wrapper">
        <Modal
          centered
          maskClosable={false}
          visible={this.props.visible}
          footer={null}
          onOk={this.props.toggleModel}
          onCancel={this.handleReset}
        >
          <h1 className="form-titel">inaBaava Ka-ca nau rPsTr</h1>
          <Form className="form-income" onSubmit={this.handleSubmit}>
            <Row gutter={[16, 16]}>
              <Col span={12}>
                {/* ------------------------------Date--------------------------------- */}
                <Form.Item className="date-input" label="taarIKa">
                  {getFieldDecorator("date", {
                    rules: [{ required: true, message: "Enter The Date!" }],
                    initialValue: type && moment(data.date)
                  })(<DatePicker className="english-font-input" />)}
                </Form.Item>
              </Col>
              <Col span={12} className="pin-set">
                <label
                  for="Income_date"
                  class="ant-form-item-required"
                  title="tarIq"
                >
                  kula paSauAao naI saMKyaa:
                </label>
                <Tag
                  className="tag-clock "
                  color="#f50"
                  style={{ marginTop: "-2px" }}
                >
                  {this.state.animal_total}
                </Tag>
              </Col>
            </Row>

            {/* ------------------------------Table--------------------------------- */}
            <div>
              <Index
                type="nibhav"
                submit={this.onTableSubmit}
                data={data ? data : ""}
                tableType={this.props.type}
                total={this.state.total}
                cancel={this.props.visible}
              />
            </div>

            <div className="m-btn-gru">
              {/* ----------------------------Cancel Button------------------------------- */}
              <Form.Item>
                <Button size="default" onClick={this.handleReset}>
                  rd
                </Button>
              </Form.Item>
              {/* ------------------------------Save Button--------------------------------- */}
              <Form.Item>
                <Button
                  icon="save"
                  size="default"
                  type="primary"
                  htmlType="submit"
                >
                  saova
                </Button>
              </Form.Item>
            </div>
          </Form>
        </Modal>
      </div>
    );
  }
}
const ResicentalAnimals = Form.create({ name: "Income" })(ResicentalAnimal);

const mapStateToProps = state => ({
  ...state.Test
  // ...state.Animals
});

export default connect(mapStateToProps, { addCostAnimal, getAnimalChart })(
  ResicentalAnimals
);
