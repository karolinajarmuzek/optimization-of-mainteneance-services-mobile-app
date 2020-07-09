import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";
import { Provider } from "react-redux";

import Navigator from "./config/routes";
import store from "./config/store";

EStyleSheet.build({
  $primaryBlue: "#5765E5",
  $white: "#ffffff"
});

export default () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);
