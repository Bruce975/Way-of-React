import React, { Component, Fragment } from "react";
import { Button } from "antd";
import { AnimeContextConsumer } from "../index";

class OutsideAnime extends Component {
  //   static contextType = AnimeContextConsumer;
  render() {
    return (
      <AnimeContextConsumer>
        {({ anime, toggle }) => (
          <Fragment>
            <Button onClick={toggle}>Toogle</Button>
            <p>{anime.name}</p>
            <p>{anime.country}</p>
          </Fragment>
        )}
      </AnimeContextConsumer>
    );
  }
}

export default OutsideAnime;
