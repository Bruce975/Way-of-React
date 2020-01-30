import React, { Component } from "react";
import { Button } from "antd";
import { AnimeContextConsumer } from "../index";

class OutsideAnime extends Component {
  //   static contextType = AnimeContextConsumer;
  render() {
    return (
      <AnimeContextConsumer>
        {({ anime, toggle }) => (
          <div>
            <Button onClick={toggle}>Toogle</Button>
            <p>{anime.name}</p>
            <p>{anime.country}</p>
          </div>
        )}
      </AnimeContextConsumer>
    );
  }
}

export default OutsideAnime;
