import React, { useContext } from 'react';
import { startRenderingOn } from './util';
import { observer } from 'mobx-react-lite';

import { AppStoreCtx } from './store/AppStore';

const Component2 = observer(() => {
  const store = useContext(AppStoreCtx);

  return (
    <div>
      Name:{' '}
      <input
        type="text"
        value={store.owner}
        onChange={(e) => store.setOwner(e.target.value)}
      />
    </div>
  );
});

export default Component2;
startRenderingOn(<Component2 />, 'componentB');
