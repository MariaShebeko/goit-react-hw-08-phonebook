import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import contactsReducer from './contacts/contacts-reducer';

// example of middleware =============
// const myMiddleware = store => next => action => {
//   console.log('My middleware', action);
//   next(action);
// };
// =======================

// const contactsPersistConfig = {
//   key: 'contacts',
//   storage,
//   blacklist: 'filter',
// };

// const persistedReducer = persistReducer(contactsPersistConfig, contactsReducer);

export const store = configureStore({
  reducer: contactsReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
  devTools: process.env.NODE_ENV === 'development',
});

// export const persistor = persistStore(store);
