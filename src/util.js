import React from 'react';
import ReactDOM from 'react-dom';

import { AppStoreCtx, AppStore } from './store/AppStore';

const store = new AppStore();

export const startRenderingOn = (component, selector) => {
  const e = document.querySelectorAll(selector);
  for (let i of e) {
    ReactDOM.render(
      <AppStoreCtx.Provider value={store}>{component}</AppStoreCtx.Provider>,
      i
    );
  }
};
