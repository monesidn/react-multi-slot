import { createContext } from 'react';
import { makeAutoObservable } from 'mobx';

export class AppStore {
  owner = 'Daniele';

  constructor() {
    makeAutoObservable(this);
  }

  setOwner(name) {
    this.owner = name;
  }
}

export const AppStoreCtx = createContext();
