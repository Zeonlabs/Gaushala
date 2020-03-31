import React from "react";
// import ReactToPrint from "react-to-print";
import src from "../HeaderImage/headerImg.svg";
import "./index.css";
import ExpenseTable from "./ExpenseTable";

class ExpensePrintSlip extends React.Component {
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
            <h1 className="slip-sign-text">: vaa]car :</h1>
            {/* <hr className="first-hr"></hr> */}
          </div>

          {/* -------------------------------------------------------------------------------------------
          --------------------------------------INCOME SLIP---------------------------------------------
          -------------------------------------------------------------------------------------------- */}

          <div className="row">
            <div className="column-1">
              <h2>vaa]car naM.: &nbsp;</h2>
              {/* --------------------------vauchar num --------------------------- */}
              <h2 className="slip-num">{this.props.voucher}</h2>
            </div>

            <div className="column-2">
              <h2>taarIKa : &nbsp;</h2>
              {/* -------------------------- Date --------------------------- */}
              <h2 className="Date  english-font">{this.props.date}</h2>
            </div>
          </div>

          <div className="row">
            <div className="column-1 padding-top-0">
              <h2>naaNaa laonaar nau naama : &nbsp;</h2>
              {/* --------------------------Slip Address --------------------------- */}
              <h2 className="slip-num">{this.props.name}</h2>
            </div>

            <div className="column-2 padding-top-0">
              <h2>gaama : &nbsp;</h2>
              {/* --------------------------Slip Name --------------------------- */}
              <h2 className="Date ">{this.props.address}</h2>
            </div>
          </div>

          <div className="row">
            <div className="column-1 padding-top-0">
              <h2>maaobaa[la naM. : &nbsp;</h2>
              {/* --------------------------Mobile Num --------------------------- */}
              <h2 className="slip-num">{this.props.mobile}</h2>
            </div>
            {this.props.cheque_no ? (
              <div className="column-2 padding-top-0">
                <h2>caok naM. : &nbsp;</h2>
                {/* --------------------------Cheque Num --------------------------- */}
                <h2 className="Date ">{this.props.cheque_no}</h2>
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="row">
            <div className="column-50 padding-top-0">
              <h2>hstak naama : &nbsp;</h2>
              {/* --------------------------Hastak name --------------------------- */}
              <h2 className="slip-num">{this.props.refname}</h2>
            </div>

            <div className="column-50 padding-top-0">
              {/* <h2>gaama : &nbsp;</h2> */}
              {/* --------------------------Slip Name --------------------------- */}
              {/* <h2 className="Date " >ivarDI</h2> */}
            </div>
          </div>

          {/* ----------------------------------------------table------------------------------ */}
          <div className="table">
            <ExpenseTable data={this.props.table} total={this.props.amount} />
          </div>

          {/* -----------------------------------------------Content-------------------------------- */}
          <div className="row padding-row">
            <h3></h3>
          </div>

          <div className="row">
            <div className="column-50-sign">
              <hr className="hr-left-sign"></hr>
              {/* --------------------------Slip sign --------------------------- */}
              <h2 className="slip-sign-text">
                saItaarama gaaOSaaLaa T/sT vataI
              </h2>
            </div>

            <div className="column-50-sign">
              <hr className="hr-right-sign"></hr>
              {/* --------------------------Slip sign --------------------------- */}
              <h2 className="slip-sign-text">naaNaa laonaar naI sahI</h2>
            </div>
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

export default ExpensePrintSlip;
