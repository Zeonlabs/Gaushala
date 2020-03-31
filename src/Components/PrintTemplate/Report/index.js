import React from "react";
// import ReactToPrint from "react-to-print";
import src from "../HeaderImage/headerImg.svg";
import "./index.css";
import ReportTable from "./ReportTable";

class ReportPrint extends React.Component {
  render() {
    return (
      <div>
        <div className="slip-print">
          <div className="slip-header">
            <img className="img-header" src={src} alt="boohoo"></img>
            <hr className="first-hr"></hr>
            <hr className="first-hr margin-top-5"></hr>
          </div>

          <div>
            {/* ---------------------------------------Report Name--------------------------------- */}
            <h1 className="slip-sign-text">
              {" "}
              : &nbsp;<span className="Report name">{this.props.name}</span>
              &nbsp; :{" "}
            </h1>
          </div>

          {/* -------------------------------------------------------------------------------------------
          --------------------------------------INCOME SLIP---------------------------------------------
          -------------------------------------------------------------------------------------------- */}

          <div className="Report table">
            <ReportTable
              data={this.props.data}
              type={this.props.type}
              column={this.props.column}
            />
          </div>
        </div>
      </div>
    );
  }
}

// class Example extends React.Component {
//   render() {
//     return (
//       <div>
//         <ComponentToPrint ref={el => (this.componentRef = el)} />
//         <ReactToPrint
//           trigger={() => <a href="#">Print this out!</a>}
//           content={() => this.componentRef}
//         />
//       </div>
//     );
//   }
// }

export default ReportPrint;
