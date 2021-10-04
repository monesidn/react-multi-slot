import React from 'react';
import ReactDOM from 'react-dom';

import { AppStoreCtx, AppStore } from './store/AppStore';

const store = new AppStore();

export const startRenderingOn = (component, tagId) => {
  const e = document.getElementById(tagId);
  if (e)
    ReactDOM.render(
      <AppStoreCtx.Provider value={store}>{component}</AppStoreCtx.Provider>,
      e
    );
};
