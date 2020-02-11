import React, { Component } from "react";
import MenuBar from "../Common/MenuBar";
import { Card, Row, Col } from "antd";
import PageWrapper from "../Common/PageWrapper/PageWrapper";
import Cards from "./Cards";
import CreditAnimal from "./CreditAnimal";
import DebitAnimal from "./DebitAnimal";
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
              <Col className="gutter-row card-content" span={6}>
                <Cards
                  title="Aavel Animals"
                  slug="aavel_animal"
                  onClick={this.onClick}
                />
              </Col>
              <Col className="gutter-row card-content" span={6} offset={2}>
                <Cards
                  title="Death Animals"
                  slug="death_animal"
                  onClick={this.onClick}
                />
              </Col>
              <Col className="gutter-row card-content" span={6} offset={2}>
                <Cards
                  title="Given Animals"
                  slug="given_animal"
                  onClick={this.onClick}
                />
              </Col>
              <Col className="gutter-row card-content" span={6}>
                <Cards
                  title="All Animal"
                  slug="all_animal"
                  onClick={this.onClick}
                />
              </Col>
              <Col className="gutter-row card-content" span={6} offset={2}>
                <Cards
                  title="Ghascharo"
                  slug="ghascharo"
                  onClick={this.onClick}
                />
              </Col>
            </Row>
          </div>
        ) : (
          ""
        )}
        <div>
          <div>
            {this.state.slug === "aavel_animal" ? <CreditAnimal /> : ""}
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
