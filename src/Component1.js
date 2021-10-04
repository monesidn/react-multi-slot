import React, { useContext } from 'react';
import { startRenderingOn } from './util';
import { observer } from 'mobx-react-lite';

import { AppStoreCtx } from './store/AppStore';

const Component1 = observer(() => {
  const store = useContext(AppStoreCtx);

  return (
    <div>
      <h1>Hello From {store.owner}</h1>
    </div>
  );
});

export default Component1;
startRenderingOn(<Component1 />, 'componentA');
