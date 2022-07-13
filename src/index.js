import AppNavigator from "./navigation/index";
import { Provider } from "react-redux";
import React from "react";
import {store} from "./store";

export default function Root(){
    return (
        <Provider store={store}>
          <AppNavigator/>
        </Provider>
    );
  };