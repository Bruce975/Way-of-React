import React, { Component, createContext } from "react";
import { Button } from "antd";
import OutsideAnime from "./OutsideAnime";
import { AnimeContext, animeList } from "./context";

const Anime = createContext("灌篮高手"); // 创建Context的唯一方法
Anime.displayName = "myAnime"; //context在React DevTools中显示的名字

class Context extends Component {
  constructor() {
    super();
    this.state = {
      value: "鬼灭之刃",
      outContext: {
        anime: animeList.first,
        toggle: this.toggle
      }
    };
  }
  change = () => {
    this.setState({ value: "小英雄" });
  };
  toggle = () => {
    this.setState({
      outContext: {
        anime:
          this.state.outContext.anime === animeList.first
            ? animeList.second
            : animeList.first,
        toggle: this.toggle
      }
    });
  };
  render() {
    return (
      <div className="context">
        <h2>Context</h2>
        <h3>同文件传参</h3>
        <Button onClick={this.change}>小英雄</Button>
        <Anime.Provider value={this.state.value}>
          <AnimeBox />
        </Anime.Provider>
        <h3>跨文件传参</h3>
        <AnimeContext.Provider value={this.state.outContext}>
          <OutsideAnime />
        </AnimeContext.Provider>
      </div>
    );
  }
}

function AnimeBox(props) {
  return <AnimeContent />;
}

class AnimeContent extends Component {
  static contextType = Anime;
  render() {
    return (
      <div>
        <p>{this.context}</p> {/* 使用Context.contextType获取context值 */}
        <Anime.Consumer>{context => <p>{context}</p>}</Anime.Consumer>{" "}
        {/* 使用Context.Consumer获取context值 */}
      </div>
    );
  }
}

export const AnimeContextConsumer = AnimeContext.Consumer;
export default Context;
