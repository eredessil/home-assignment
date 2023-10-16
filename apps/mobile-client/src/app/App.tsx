/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import {Provider} from "react-redux";
import store from "../redux/store";
import {Navigation} from "../navigation";
import 'react-native-gesture-handler';

export const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
