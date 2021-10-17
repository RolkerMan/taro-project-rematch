import { Component } from "react";
import { View, Text } from "@tarojs/components";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import { AtButton } from "taro-ui";

import "taro-ui/dist/style/components/button.scss"; // 按需引入
import { RootState, Dispatch } from "../../store";
import "./index.scss";

// export default class Index extends Component {
//   componentWillMount() {}

//   componentDidMount() {}

//   componentWillUnmount() {}

//   componentDidShow() {}

//   componentDidHide() {}

//   render() {
//     return (
//       <View className="index">
//         <Text>Hello world!</Text>
//         <AtButton >I need Taro UI</AtButton>
//         <Text>Taro UI 支持 Vue 了吗？</Text>
//         <AtButton  circle={true}>
//           支持
//         </AtButton>
//         <Text>共建？</Text>
//         <AtButton type="secondary" circle={true}>
//           来
//         </AtButton>
//       </View>
//     );
//   }
// }

const Count = () => {
  const dolphins = useSelector((state: RootState) => state.dolphins);
  const sharks = useSelector((state: RootState) => state.sharks);
  const dispatch = useDispatch<Dispatch>();

  return (
    <View style={{ display: "flex", flexDirection: "row" }}>
      <View style={{ width: 120 }}>
        <Text>Dolphins</Text>
        <Text>{dolphins}</Text>
        <AtButton onClick={() => dispatch.dolphins.increment()}>+1</AtButton>
        <AtButton onClick={() => dispatch.dolphins.increment(3)}>+3</AtButton>
        <AtButton onClick={() => dispatch.dolphins.incrementAsync()}>
          Async +1
        </AtButton>
      </View>
      <View style={{ width: 200 }}>
        <Text>Sharks</Text>
        <Text>{sharks}</Text>
        <AtButton onClick={() => dispatch.sharks.increment(1)}>+1</AtButton>
        <AtButton onClick={() => dispatch.sharks.incrementAsync(1)}>
          Async +1
        </AtButton>
        <AtButton
          onClick={() =>
            dispatch({ type: "sharks/incrementAsync", payload: 2 })
          }
        >
          Async +2
        </AtButton>
      </View>
      <p>Using Rematch Models</p>
    </View>
  );
};

export default Count;
