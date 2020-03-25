import React, { Component } from "react";
import MenuBar from "../Common/MenuBar";
import { Icon, Card, Row, Col } from "antd";
import PageWrapper from "../Common/PageWrapper/PageWrapper";
import Cards from "./Cards";
import "./Animal.scss";
import CreditAnimal from "./LIst/CreditAnimal";
import DebitAnimal from "./LIst/DebitAnimal";
import DeadAnimal from "./LIst/DeadAnimal";
import ResidentalAnimal from "./LIst/ResidentalAnimal";
import TotalAnimal from "./LIst/TotalAnimal";
import CreditAnimals from "./PopupForm/CreditAnimal";
import DebitAnimals from "./PopupForm/DebitAnimal";
import DeadAnimals from "./PopupForm/DeadAnimal";
import ResidentalAnimals from "./PopupForm/ResidentalAnimal";
// import TotalAnimals from "./PopupForm/TotalAnimal";

const { Meta } = Card;
class Animal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: "",
      slug: "",
      creaditAnimalpopup: false,
      deadAnimalpopup: false,
      debitAnimalpopup: false,
      totalAnimalpopup: false,
      residentalAnimalpopup: false
    };
  }

  onClick = e => {
    console.log("TCL: Animal -> slug", e);
    switch (e) {
      case "creadit_animal":
        this.setState({
          slug: e
        });
        break;

      case "dead_animal":
        this.setState({
          slug: e
        });
        break;

      case "debit_animal":
        this.setState({
          slug: e
        });
        break;

      case "total_animal":
        this.setState({
          slug: e
        });
        break;

      case "resident_cost":
        this.setState({
          slug: e
        });
        break;

      default:
        break;
    }
  };

  handelPopup = e => {
    console.log("TCL: Animalsadasd -> slug", e);
    switch (e) {
      case "creadit_animal":
        this.creaditAnimalModel();
        break;

      case "dead_animal":
        this.deadAnimalpopupModel();
        break;

      case "debit_animal":
        this.debitAnimalpopupModel();
        break;

      case "total_animal":
        this.totalAnimalpopupModel();
        break;

      case "resident_cost":
        this.residentalAnimalpopupModel();
        break;

      default:
        break;
    }
  };

  backClick = () => {
    console.log("this is a log in a main animal function ->");
    this.setState({
      slug: ""
    });
  };

  creaditAnimalModel = () =>
    this.setState({
      creaditAnimalpopup: !this.state.creaditAnimalpopup
    });
  deadAnimalpopupModel = () =>
    this.setState({
      deadAnimalpopup: !this.state.deadAnimalpopup
    });
  debitAnimalpopupModel = () =>
    this.setState({
      debitAnimalpopup: !this.state.debitAnimalpopup
    });
  totalAnimalpopupModel = () =>
    this.setState({
      totalAnimalpopup: !this.state.totalAnimalpopup
    });
  residentalAnimalpopupModel = () =>
    this.setState({
      residentalAnimalpopup: !this.state.residentalAnimalpopup
    });

  handelListPage = e => {
    console.log("TCL: Animal -> slsadasdsug ->", e);
    switch (this.state.slug) {
      case "creadit_animal":
        return <CreditAnimal back={this.backClick} />;
        break;

      case "dead_animal":
        return <DeadAnimal back={this.backClick} />;
        break;

      case "debit_animal":
        return <DebitAnimal back={this.backClick} />;
        break;

      case "total_animal":
        return <TotalAnimal back={this.backClick} />;
        break;

      case "resident_cost":
        return <ResidentalAnimal back={this.backClick} />;
        break;

      default:
        return "";
        break;
    }
  };

  handelPopupForm = e => {
    // console.log("TCL: Animal -> slug", e);
    // switch (this.state.slug) {
    //   case "creadit_animal":
    //     return <CreditAnimal />;
    //     break;
    //   case "dead_animal":
    //     return <DeadAnimal />;
    //     break;
    //   case "debit_animal":
    //     return <DebitAnimal />;
    //     break;
    //   case "total_animal":
    //     return <TotalAnimal />;
    //     break;
    //   case "resident_cost":
    //     return <ResidentalAnimal />;
    //     break;
    //   default:
    //     return "";
    //     break;
    // }
  };

  render() {
    return (
      <PageWrapper
        header={this.state.slug !== ""}
        title="pxu nI yadI"
        onBackClick={this.backClick}
      >
        {this.state.slug === "" ? (
          <div>
            <Row gutter={16}>
              {/* -----------------------------------------------------------------------
              -----------------------------------Animal income---------------------------
              --------------------------------------------------------------------------- */}
              <Col className="gutter-row card-content card-hover-scss" span={6}>
                <Card
                  className="card-background"
                  title="Aavel pxuAO"
                  bordered={false}
                >
                  <div className="Card-view-buttons">
                    <div
                      onClick={() => this.handelPopup("creadit_animal")}
                      slug="animal_income"
                      className="Button-display-grid"
                    >
                      <Icon
                        type="plus-circle"
                        style={{ fontSize: 40 }}
                        theme="outlined"
                      />
                      <span>yadI ]mero</span>
                    </div>
                    <div
                      className="Button-display-grid"
                      onClick={() => this.onClick("creadit_animal")}
                    >
                      <Icon
                        type="file-text"
                        style={{ fontSize: 40 }}
                        theme="outlined"
                      />
                      <span>rIpo3</span>
                    </div>
                  </div>
                </Card>
              </Col>
              {/* -----------------------------------------------------------------------
              -----------------------------------Animal Dethes---------------------------
              --------------------------------------------------------------------------- */}
              <Col className="gutter-row card-content card-hover-scss" span={6}>
                <Card
                  className="card-background"
                  title="muTyu pamel pxuAO"
                  bordered={false}
                >
                  <div className="Card-view-buttons">
                    <div
                      onClick={() => this.handelPopup("dead_animal")}
                      className="Button-display-grid"
                    >
                      <Icon
                        type="plus-circle"
                        style={{ fontSize: 40 }}
                        theme="outlined"
                      />
                      <span>yadI ]mero</span>
                    </div>
                    <div
                      className="Button-display-grid"
                      onClick={() => this.onClick("dead_animal")}
                    >
                      <Icon
                        type="file-text"
                        style={{ fontSize: 40 }}
                        theme="outlined"
                      />
                      <span>rIpo3</span>
                    </div>
                  </div>
                </Card>
              </Col>
              {/* -----------------------------------------------------------------------
              -----------------------------------Animal Given---------------------------
              --------------------------------------------------------------------------- */}
              <Col
                className="gutter-row card-content card-hover-scss card-back-theme"
                span={6}
              >
                <Card
                  className="card-background"
                  title="Aapel pxuAO"
                  bordered={false}
                >
                  <div className="Card-view-buttons">
                    <div
                      onClick={() => this.handelPopup("debit_animal")}
                      className="Button-display-grid"
                    >
                      <Icon
                        type="plus-circle"
                        style={{ fontSize: 40 }}
                        theme="outlined"
                      />
                      <span>yadI ]mero</span>
                    </div>
                    <div
                      className="Button-display-grid"
                      onClick={() => this.onClick("debit_animal")}
                    >
                      <Icon
                        type="file-text"
                        style={{ fontSize: 40 }}
                        theme="outlined"
                      />
                      <span>rIpo3</span>
                    </div>
                  </div>
                </Card>
              </Col>

              {/* -----------------------------------------------------------------------
              -----------------------------------Nibhav kharch---------------------------
              --------------------------------------------------------------------------- */}
              <Col
                className="gutter-row card-content card-hover-scss "
                span={6}
              >
                <Card
                  className="card-background"
                  title="inwav qcR"
                  bordered={false}
                >
                  <div className="Card-view-buttons">
                    <div
                      onClick={() => this.handelPopup("resident_cost")}
                      className="Button-display-grid"
                    >
                      <Icon
                        type="plus-circle"
                        style={{ fontSize: 40 }}
                        theme="outlined"
                      />
                      <span>yadI ]mero</span>
                    </div>
                    <div
                      className="Button-display-grid"
                      onClick={() => this.onClick("resident_cost")}
                    >
                      <Icon
                        type="file-text"
                        style={{ fontSize: 40 }}
                        theme="outlined"
                      />
                      <span>rIpo3</span>
                    </div>
                  </div>
                </Card>
              </Col>

              {/* -----------------------------------------------------------------------
              -----------------------------------Animal Total---------------------------
              --------------------------------------------------------------------------- */}
              <Col className="gutter-row card-content card-hover-scss" span={6}>
                <Card
                  className="card-background"
                  title="Kul pxuAO"
                  bordered={false}
                >
                  <div className="Card-view-buttons">
                    {/* <div
                      onClick={() => this.handelPopup("total_animal")}
                      className="Button-display-grid"
                    >
                      <Icon
                        type="plus-circle"
                        style={{ fontSize: 40 }}
                        theme="outlined"
                      />
                      <span>yadI ]mero</span>
                    </div> */}
                    <div
                      className="Button-display-grid"
                      onClick={() => this.onClick("total_animal")}
                    >
                      <Icon
                        type="file-text"
                        style={{ fontSize: 40 }}
                        theme="outlined"
                      />
                      <span>rIpo3</span>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
          </div>
        ) : (
          ""
        )}
        <div>
          {this.handelListPage(this.state.slug)}
          <CreditAnimals
            visible={this.state.creaditAnimalpopup}
            toggleModel={this.creaditAnimalModel}
          />
          <DeadAnimals
            visible={this.state.deadAnimalpopup}
            toggleModel={this.deadAnimalpopupModel}
          />
          <DebitAnimals
            visible={this.state.debitAnimalpopup}
            toggleModel={this.debitAnimalpopupModel}
          />
          {/* <TotalAnimals
            visible={this.state.totalAnimalpopup}
            toggleModel={this.totalAnimalpopupModel}
          /> */}
          <ResidentalAnimals
            visible={this.state.residentalAnimalpopup}
            toggleModel={this.residentalAnimalpopupModel}
          />
          {/* <div>
            {this.state.slug === "animal_income" ? <CreditAnimal /> : ""}
          </div>
          <div>{this.state.slug === "given_animal" ? <DebitAnimal /> : ""}</div> */}
          {/* <div>{this.state.slug === "aavel_animal" ? <CreditAnimal /> : ""}</div>
        <div>{this.state.slug === "aavel_animal" ? <CreditAnimal /> : ""}</div>
        <div>{this.state.slug === "aavel_animal" ? <CreditAnimal /> : ""}</div> */}
        </div>
      </PageWrapper>
    );
  }
}

export default Animal;
