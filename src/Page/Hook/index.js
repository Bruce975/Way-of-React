import React, { Fragment, useState } from "react";
import { Button } from "antd";

function Hook() {
  const [count, setCount] = useState(0);
  const addCount = () => {
    setCount(count + 1);
  };
  return (
    <Fragment>
      <h5>Hook</h5>
      <Button onClick={addCount}>系松弟造来点我</Button>
      <p>您点了{count}次</p>
    </Fragment>
  );
}

export default Hook;
