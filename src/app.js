import React, { Component } from "react";
import { Provider } from "react-redux";
// import { Component } from "@tarojs/taro";
import { store } from "./store";
import "./app.scss";

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // this.props.children 是将要会渲染的页面
  render() {
    // <React.StrictMode>
    // </React.StrictMode>
    return <Provider store={store}>{this.props.children}</Provider>;
  }
}

export default App;
