import React from "react";
import { Card, Icon, Avatar } from "antd";
// import PageWrapper from "../Common/PageWrapper/PageWrapper";
const { Meta } = Card;

const Cards = props => {
  return (
    <Card
      style={{ width: 300 }}
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      onClick={() => props.onClick(props.slug)}
    >
      <Meta
        avatar={
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        }
        title={props.title}
        description="This is the description"
      />
    </Card>
  );
};

export default Cards;
