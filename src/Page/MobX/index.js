import React, { Fragment } from "react";
import { observable, intercept, action, observe } from "mobx";
import { observer } from "mobx-react";
import { Button } from "antd";

const interceptCount = observable({ count: 1 }, { count: observable.ref });
const boxedValue = observable.box(6);

//interceptCount相关函数
const addCount = action(() => {
  //   interceptCount.push(interceptCount.length + 1);
  interceptCount.count++;
});
const clearCount = () => {
  interceptCount.clear();
};
const replaceCount = () => {
  interceptCount.replace([2]);
};
const findCount = action(() => {
  interceptCount.find((item, index) => index < 2);
});
const removeCount = () => {
  interceptCount.remove(1);
};
const disposer = intercept(
  interceptCount,
  change => {
    //   console.log(change);
    return change;
  },
  true
);
const listener = observe(interceptCount, change => {
  console.log(change);
});

//boxedValue相关
const addBoxedValue = () => {
  boxedValue.set(boxedValue + 1);
};
const Mobx = observer(() => {
  return (
    <Fragment>
      <p>intercept点了{interceptCount.count}次</p>
      <Button onClick={addCount}>intercept</Button>
      <Button onClick={clearCount}>清空数组</Button>
      <Button onClick={replaceCount}>替换数组</Button>
      <Button onClick={findCount}>Find数组</Button>
      <Button onClick={removeCount}>remove数组</Button>
      <p>boxed values = {boxedValue.get()}</p>
      <Button onClick={addBoxedValue}>boxedValue++</Button>
    </Fragment>
  );
});

export default Mobx;
