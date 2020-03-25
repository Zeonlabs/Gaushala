import React from "react";
import { Card, Icon, Popconfirm } from "antd";
import "./Notes.scss";

const { Meta } = Card;

const CardNotes = props => {
  const handelEdit = () => {
    props.handelSubmit(props.data);
  };

  const handelDelete = () => {
    props.handelDelete(props.data._id);
  };
  return (
    <div className="card-wrapper">
      <Card
        style={{ width: 300, marginTop: 16 }}
        cover={<h1>{props.data.title}</h1>}
        actions={[
          <Icon
            className="edit-note-button"
            onClick={handelEdit}
            type="edit"
            theme="filled"
            style={{ color: "#3AD944" }}
            key="edit"
          />,
          <Popconfirm
            placement="top"
            title="Are you sure ?"
            onConfirm={handelDelete}
            okText="Yes"
            cancelText="No"
          >
            <Icon
              theme="filled"
              // onClick={handelDelete}
              style={{ color: "rgba(255, 0, 0)" }}
              type="delete"
              key="setting"
            />
          </Popconfirm>
        ]}
      >
        <Meta description={props.data.description} />
      </Card>
    </div>
  );
};

export default CardNotes;
