// Avoid "redux-persist failed to create sync storage..." on SSR
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';

const createNoopStorage = () => ({
  getItem() { return Promise.resolve(null); },
  setItem(_k, v) { return Promise.resolve(v); },
  removeItem() { return Promise.resolve(); },
});

const storage = typeof window !== 'undefined'
  ? createWebStorage('local')
  : createNoopStorage();

export default storage;
