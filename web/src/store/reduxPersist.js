import storage from 'redux-persist/lib/storage';

import ImmutablePersistenceTransform from './ImmutablePersistenceTransform';

export default {
  key: '@gobarber',
  storage,
  whitelist: ['user'],
  transforms: [ImmutablePersistenceTransform],
};
