'use client';
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { makeStore } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [store] = useState(() => {
    const store = makeStore();
    return store;
  });

  const [persistor] = useState(() => {
    return persistStore(store);
  });

  return (
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}
      >
        {children}
      </PersistGate>
    </Provider>
  );
}
