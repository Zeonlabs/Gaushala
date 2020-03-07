import React, { Component } from "react";
import $ from "jquery";
import {
  Icon,
  InputNumber,
  Input,
  Spin,
  message,
  Button,
  Row,
  Col
} from "antd";
import { connect } from "react-redux";
import OTPInput, { ResendOTP } from "../../Static/Widgets/lib/index";
// import Cards from "../Common/Card";
// import { setMobileNumber, setOtpPost } from "../../actions/global";
// import { setLoginData } from "../../actions/localData";
// import { CheckIcon, IndianIcon, WarningIcon } from "../Common/Iconsvg";
// import { DisableButtons } from "../Common/Buttons";
// import TopHeaders from "../Common/TopHeaders";
// import Buttons from '../Common/Buttons';

const spinIcon = (
  <Icon type="loading-3-quarters" style={{ fontSize: 32 }} spin />
);

class OtpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputNumber: false,
      disabled: false,
      otp: "",
      verify: false,
      resendOtp: false,
      resendOtpButton: false,
      resendClick: false,
      mobile: 0,
      wrongOtp: false,
      otpMessage: ""
    };
  }

  componentDidMount = () => {
    $("input").attr("placeholder", ".");
    this.setState({
      mobile: this.props.mobile || localStorage.getItem("mobile")
    });
  };

  //   handelInputChange = (e) => {
  //     if(e.target.value.length === 10){
  //       this.setState({
  //         className : "send-otp-dictivate",
  //         disabled : true,
  //       },() => console.log("this is a handelChange state->",this.state.className));
  //     }
  //     else{
  //     this.setState({
  //       inputNumber : e.target.value,
  //       className : "send-otp",
  //       disabled : false,
  //     },() => console.log("this is a handelChange state->",this.state.inputNumber));
  //   }
  // }

  inputChange = e => {
    // console.log('this is a log on a input change ;->', e);
    this.setState({ otp: e }, () => {
      if (this.state.otp.length === 4) {
        this.setState({
          inputNumber: true,
          otp: e
        });
      } else if (this.state.otp.length < 4) {
        this.setState({
          inputNumber: false,
          otp: e
        });
      } else {
        this.setState({
          inputNumber: false
        });
      }
    });
  };

  resendButton = () => {
    if (!this.state.resendOtp) {
      this.setState({
        resendOtp: true
      });
    } else {
      this.setState({
        resendOtp: false
      });
    }
  };

  handelResendClick = async () => {
    const data = {
      mobile_number: this.state.mobile
    };
    this.setState({
      resendClick: true
    });

    await this.props
      .setMobileNumber(data)
      .then(res => {
        this.setState({
          resendClick: false,
          resendOtpButton: true,
          otpMessage: "Resend"
        });
      })
      .catch(e => {
        // console.log(e);
        this.setState({
          resendClick: false
        });
      });
  };

  handelNumber = () => {
    window.open("/otp-verification-issues/");
  };

  renderButton = buttonProps => (
    <button
      {...buttonProps}
      disabled={buttonProps.remainingTime !== 0}
      className={
        buttonProps.remainingTime !== 0
          ? this.state.resendClick
            ? "spin-class-spinning"
            : "resend-otp-button"
          : "resend-otp-activate"
      }
    >
      {this.state.resendClick ? (
        <Spin indicator={spinIcon} />
      ) : buttonProps.remainingTime !== 0 ? (
        `Resend OTP in ${buttonProps.remainingTime}`
      ) : (
        "Resend OTP"
      )}
    </button>
  );

  renderResendOtp = buttonProps => (
    // console.log('this is a log in a renderResendOtp function :->', buttonProps);
    <button
      className={
        this.state.resendClick
          ? "spin-class-spinning"
          : "resend-otp-activate resend-otp-render-one-click"
      }
      disabled
      onClick={this.handelResendClick}
    >
      {this.state.resendClick ? <Spin indicator={spinIcon} /> : "OTP Resent"}
    </button>
  );

  handleOtp = e => {
    e.preventDefault();
    this.setState({
      verify: true
    });
    if (this.state.otp.length === 4) {
      // console.log('this is a log in a handel otp next button -------', this.state.otp);
      const data = {
        otp: parseInt(this.state.otp)
      };
      this.props
        .setOtpPost(data)
        .then(res => {
          // console.log('Otp Match', res);
          this.props.next();
          this.setState({
            verify: false
          });
          this.props.setLoginData();
        })
        .catch(e => {
          this.setState({
            wrongOtp: true,
            verify: false,
            otpMessage: "Invalid"
          });
        });
    }
  };

  renderTime = () => React.Fragment;

  handelButtonChange = () => {
    // console.log('123');
  };

  render() {
    return (
      <div>
        <Row gutter={[16, 16]}>
          <Col span={8}></Col>
          <Col span={8}>
            <div className="financial-planing-first card-section-height otp-verification-page">
              {/* <div className="otp-page-heading">
            <h1 className="login-heading-text">OTP Verification</h1>
          </div> */}
              <h1>Ao.3I.pI verIfIkexn</h1>
              <div
                className={
                  this.state.otpMessage === "Invalid"
                    ? "wrong-otp-message-wrapper"
                    : this.state.resendOtpButton
                    ? "resend-otp-headder"
                    : "otp-page-description"
                }
              >
                {this.state.otpMessage === "Invalid" ? (
                  <div className="weong-otp-message-redirect">
                    {/* <WarningIcon /> */}
                    <p>Invalid OTP</p>
                  </div>
                ) : (
                  <>
                    <p>
                      {this.state.resendOtpButton
                        ? "Ao.3I.pI Aap na moba[l n>br frI moklayo 0e."
                        : "Ao.3I.pI Aap na moba[l n>br moklayo 0e."}
                    </p>
                    <p className="table-font-english">{`+91 ${this.state.mobile}`}</p>
                  </>
                )}
              </div>
              <div className="otp-page-buttons">
                <OTPInput
                  value={this.state.otp}
                  onChange={this.inputChange}
                  autoFocus
                  className="otp-input-number table-font-english"
                  OTPLength={4}
                  placehoder=""
                  otpType="number"
                  disabled={false}
                />
                <div className="otp-button-wrapper table-font-english">
                  <div
                    className={
                      this.state.resendOtpButton
                        ? "resend-otp-not-click "
                        : "resend-otp-not-click"
                    }
                  >
                    {this.state.resendOtp ? <p>Helo there</p> : ""}
                    <ResendOTP
                      renderButton={
                        this.state.resendOtpButton
                          ? this.renderResendOtp
                          : this.renderButton
                      }
                      maxTime={60}
                      onResendClick={this.handelResendClick}
                      renderTime={this.renderTime}
                    />
                  </div>
                  <div className="otp-button-width menu-list-title">
                    <Button type="primary" style={{ padding: "0px 30px" }}>
                      {this.state.verify ? (
                        <Spin indicator={spinIcon} />
                      ) : (
                        "sbmI3"
                      )}
                    </Button>
                  </div>
                </div>
              </div>
              <div className="send-buttons-wrapper">
                <div>
                  {this.state.resendOtpButton ? (
                    <p
                      onClick={this.handelNumber}
                      className="otp-screen-instruction"
                    >
                      Did not receive OTP?
                    </p>
                  ) : (
                    ""
                  )}
                  {/* <button className={this.state.className} onChange={this.handelButtonChange} onClick={this.props.next} disabled={this.state.disabled}>Send OTP</button> */}
                </div>
                {/* <div>
              <DisableButtons className="send-otp" onChange={this.handelButtonChange} next={this.props.next} disabled={this.state.disabled} text="Verify OTP"/>
              <button className={this.state.className} onChange={this.handelButtonChange} onClick={this.props.next} disabled={this.state.disabled}>Send OTP</button>
            </div> */}
                {/* <div className="second-page-button-wrapper">
              <Button
                text="Back"
                className="back-button"
                // prev={this.props.prev}
                // device={this.props.view}
              ></Button>
            </div> */}
              </div>
            </div>
          </Col>
          <Col span={8}></Col>
        </Row>
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   ...state.root
// });

export default OtpScreen;
