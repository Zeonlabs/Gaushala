import React from "react";
import ReactLoading from "react-loading";
// import { Title, Article, Prop, list } from "./generic";
import "./Loader.scss";

const LoaderAnimation = () => (
  <section className="loading-screen-wrapper">
    {/* <Title>React Loading</Title> */}
    <ReactLoading type="spinningBubbles" color="black" />
    {/* {list.map(l => (
      <Article key={l.prop}>
        <ReactLoading type={l.prop} color="black" />
        <Prop>{l.name}</Prop>
      </Article>
    ))} */}
  </section>
);

export default LoaderAnimation;
