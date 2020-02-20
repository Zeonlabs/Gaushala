import React, { Component } from "react";
import MenuBar from "../Common/MenuBar";
import { Icon, Card, Row, Col } from "antd";
import PageWrapper from "../Common/PageWrapper/PageWrapper";
import Cards from "./Cards";
import CreditAnimal from "./CreditAnimal";
import DebitAnimal from "./DebitAnimal";
import "./Animal.scss";

const { Meta } = Card;
class Animal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: "",
      slug: ""
    };
  }

  onClick = slug => {
    this.setState({
      slug
    });
  };

  backClick = () => {
    console.log("this is a log in a main animal function ->");
    this.setState({
      slug: ""
    });
  };

  render() {
    return (
      <PageWrapper header={this.state.slug !== ""} onBackClick={this.backClick}>
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
                  bordered={false}>
                  <div className="Card-view-buttons">
                    <div onClick={this.onClick} slug="animal_income" className="Button-display-grid">
                      <Icon
                        type="plus-circle"
                        style={{ fontSize: 40 }}
                        
                        theme="outlined"
                      />
                      <span>yadI ]mero</span>
                    </div>
                    <div className="Button-display-grid">
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
                  bordered={false}>
                  <div className="Card-view-buttons">
                    <div onClick={this.onClick} className="Button-display-grid">
                      <Icon
                        type="plus-circle"
                        style={{ fontSize: 40 }}
                        
                        theme="outlined"
                      />
                      <span>yadI ]mero</span>
                    </div>
                    <div className="Button-display-grid">
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
              <Col className="gutter-row card-content card-hover-scss" span={6}>
                <Card
                  className="card-background"
                  title="Aapel pxuAO"
                  bordered={false}>
                  <div className="Card-view-buttons">
                    <div onClick={this.onClick} className="Button-display-grid">
                      <Icon
                        type="plus-circle"
                        style={{ fontSize: 40 }}
                        
                        theme="outlined"
                      />
                      <span>yadI ]mero</span>
                    </div>
                    <div className="Button-display-grid">
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
                  bordered={false}>
                  <div className="Card-view-buttons">
                    <div onClick={this.onClick} className="Button-display-grid">
                      <Icon
                        type="plus-circle"
                        style={{ fontSize: 40 }}
                        
                        theme="outlined"
                      />
                      <span>yadI ]mero</span>
                    </div>
                    <div className="Button-display-grid">
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
              <Col className="gutter-row card-content card-hover-scss " span={6}>
                <Card
                  className="card-background"
                  title="inwav qcR"
                  bordered={false}>
                  <div className="Card-view-buttons">
                    <div onClick={this.onClick} className="Button-display-grid">
                      <Icon
                        type="plus-circle"
                        style={{ fontSize: 40 }}
                        
                        theme="outlined"
                      />
                      <span>yadI ]mero</span>
                    </div>
                    <div className="Button-display-grid">
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
          <div>
            {this.state.slug === "animal_income" ? <CreditAnimal /> : ""}
          </div>
          <div>{this.state.slug === "given_animal" ? <DebitAnimal /> : ""}</div>
          {/* <div>{this.state.slug === "aavel_animal" ? <CreditAnimal /> : ""}</div>
        <div>{this.state.slug === "aavel_animal" ? <CreditAnimal /> : ""}</div>
        <div>{this.state.slug === "aavel_animal" ? <CreditAnimal /> : ""}</div> */}
        </div>
      </PageWrapper>
    );
  }
}

export default Animal;
