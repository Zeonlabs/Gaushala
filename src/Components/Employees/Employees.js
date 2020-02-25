import React, { Component } from "react";
import { connect } from "react-redux";
import PageWrapper from "../Common/PageWrapper/PageWrapper";
import "./Employees.scss";
import moment from "moment";
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
  Upload,
  message,
  Divider
} from "antd";
import AddEmployee from "./AddEmployee/Index";
import { FilterData } from "./FilterData";
import ListingTable from "./ListingTable";
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
}

const { RangePicker } = DatePicker;
const { Option } = Select;

function onChange(dates, dateStrings) {
  console.log("From: ", dates[0], ", to: ", dates[1]);
  console.log("From: ", dateStrings[0], ", to: ", dateStrings[1]);
}

// const fileList = [
//   {
//     uid: '-1',
//     name: 'xxx.png',
//     status: 'done',
//     url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
//     thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
//   },
//   {
//     uid: '-2',
//     name: 'yyy.png',
//     status: 'error',
//   },
// ];

const props = {
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  listType: "picture"
  // defaultFileList: [...fileList],
};

const props2 = {
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  listType: "picture",
  // defaultFileList: [...fileList],
  className: "upload-list-inline"
};

export class Employees extends Component {
  gutters = {};

  vgutters = {};

  colCounts = {};

  constructor(props) {
    super(props);

    this.state = {
      gutterKey: 1,
      vgutterKey: 1,
      colCountKey: 2,
      addPopup: false
    };

    [8, 16, 24, 32, 40, 48].forEach((value, i) => {
      this.gutters[i] = value;
    });
    [8, 16, 24, 32, 40, 48].forEach((value, i) => {
      this.vgutters[i] = value;
    });
    [2, 3, 4, 6, 8, 12].forEach((value, i) => {
      this.colCounts[i] = value;
    });
  }

  onGutterChange = gutterKey => {
    this.setState({ gutterKey });
  };

  onVGutterChange = vgutterKey => {
    this.setState({ vgutterKey });
  };

  onColCountChange = colCountKey => {
    this.setState({ colCountKey });
  };

  handelEmployeePopup = () => {
    this.setState({
      addPopup: !this.state.addPopup
    });
  };

  render() {
    const { gutterKey, vgutterKey, colCountKey } = this.state;
    const cols = [];
    const colCount = this.colCounts[colCountKey];
    let colCode = "";
    for (let i = 0; i < colCount; i++) {
      cols.push(
        <Col key={i.toString()} span={24 / colCount}>
          <div>Column</div>
        </Col>
      );
      colCode += `  <Col span={${24 / colCount}} />\n`;
    }

    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? "loading" : "plus"} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const { imageUrl } = this.state;

    return (
      <PageWrapper>
        <AddEmployee
          handelEmployeePopup={this.handelEmployeePopup}
          openPopup={this.state.addPopup}
        />
        
        {/* ------------------------------------ Header Epmloyees------------------------------- */}
        <Row>
          
          <Col span={20}><div><FilterData/></div></Col>
          {/* ----------------------------------Add Employees Button---------------------------- */}
          <Col className="button-add-members" span={4}>
            <Button
              className="button-right button-text-size"
              type="primary"
              icon="user-add"
              style={{ marginRight: 20 }}
              size="large"
              onClick={this.handelEmployeePopup}
            >
              ]mero
            </Button>
          </Col>
        </Row>
        <ListingTable/>
      </PageWrapper>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Employees);

// <Divider orientation="left" className="divider-color divider-label">
//         nvo kmRcarI ]mero b3n klIk
//         </Divider>

//         {/* ------------------------------------------------------------------------------------------
//           ---------------------------------------Add Employees---------------------------------------------
//           ------------------------------------------------------------------------------------------ */}
//         <div>
//           <Row type="flex" justify="space-between">
//             {/* ------------------------------Post type--------------------------------- */}
//             <Col span={6}>
//               <Form.Item className="" label="kmRcarI no p/kar" hasFeedback>
//                 <Select
//                   className="in-icon-arrow"
//                   placeholder="kmRcarI no p/kar ps>d kro"
//                 >
//                   <Option value="vaDI na mjur">vaDI na mjur</Option>
//                   <Option value="gOxa5a na mjur">gOxa5a na mjur</Option>
//                   <Option value="Dok3r">Dok3r</Option>
//                   <Option value="mheta+">mheta+</Option>
//                   <Option value="ANy">ANy</Option>
//                 </Select>
//               </Form.Item>
//             </Col>

//             {/* -----------------------------Name of Employees-------------------------------- */}
//             <Col className="gutter-row" span={6}>
//               <Form.Item className="ant-col" label="nam">
//                 <Input placeholder="nam" />
//               </Form.Item>
//             </Col>

//             {/* ------------------------------phone No--------------------------------- */}
//             <Col span={4}>
//               <Form.Item label="moba[l n>.">
//                 <Input
//                   type="number"
//                   className="english-font-input"
//                   placeholder="+91 0000000000"
//                 />
//               </Form.Item>
//             </Col>

//             {/* -----------------------------Address of Employees-------------------------------- */}
//             <Col className="gutter-row" span={6}>
//               <Form.Item className="ant-col" label="srnamu">
//                 <Input placeholder="srnamu" />
//               </Form.Item>
//             </Col>
//           </Row>
//           {/* -------------------------------Upload Button--------------------------------------- */}
//           <Row>
//           <h4 className="uplod-label">AploD DoKyumeN3s:</h4>
//             <Upload {...props2}>
//               <Button>
//                 <Icon type="file-add" /> AploD
//               </Button>
//             </Upload>
//           </Row>

//           <Row>
//             {/* ------------------------------add button--------------------------- */}
//             <Col span={4} className="button-group">
//               <Form.Item className="print-btn-margin">
//                 <Button
//                   size="default"
//                   htmlType="submit"
//                   icon="vertical-align-bottom"
//                   style={{ backgroundColor: "#505D6F", color: "#ffffff" }}
//                 >
//                   ]mero
//                 </Button>
//               </Form.Item>
//               {/* ------------------------------Cancel Button--------------------------------- */}
//               <Form.Item>
//                 <Button size="default">rd kro</Button>
//               </Form.Item>
//             </Col>
//           </Row>

//         </div>
