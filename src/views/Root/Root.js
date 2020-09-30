import React from "react";

import { Provider } from "react-redux";
import { store } from "../../store";

const Root = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Junior Start</h1>
      </div>
    </Provider>
  );
};

export default Root;
