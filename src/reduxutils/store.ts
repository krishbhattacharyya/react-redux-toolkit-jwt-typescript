import type { Action, ThunkAction } from "@reduxjs/toolkit"
import { combineSlices, configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"

import { persistReducer, persistStore } from "redux-persist"
import storage from "redux-persist/lib/storage"

import { encryptTransform } from 'redux-persist-transform-encrypt';

import { authSlice } from "../reduxfeatures/auth/authSlice"

import { productSlice } from "../reduxfeatures/product/productSlice"

// `combineSlices` automatically combines the reducers using
// their `reducerPath`s, therefore we no longer need to call `combineReducers`.
const rootReducer = combineSlices(authSlice, productSlice)

const encryptor = encryptTransform({
  secretKey: import.meta.env.VITE_REDUX_PERSIST_KEY,
  onError(error) {
    // Handle the error.
  },
});

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: [
    //loginApi.reducerPath,
    //nluApi.reducerPath
  ],
  transforms: [encryptor]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

// Infer the `RootState` type from the root reducer
export type RootState = ReturnType<typeof rootReducer>

// The store setup is wrapped in `makeStore` to allow reuse
// when setting up tests that need the same store config
export const makeStore = (preloadedState?: Partial<RootState>) => {
  const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
    //preloadedState
  })
  setupListeners(store.dispatch)
  return store
}

export const store = makeStore()

export const persistor = persistStore(store)

// Infer the type of `store`
export type AppStore = typeof store
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = AppStore["dispatch"]
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>
