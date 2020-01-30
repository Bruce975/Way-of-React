import React from "react";

export const animeList = {
  first: {
    name: "猫和老鼠",
    country: "American"
  },
  second: {
    name: "JOJO的奇妙冒险",
    country: "Janpanese"
  }
};

export const AnimeContext = React.createContext({
  anime: animeList.first,
  toggle: () => {}
});
