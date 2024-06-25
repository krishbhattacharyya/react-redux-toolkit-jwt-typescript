import type { AppStore } from "../../app/store"
import { makeStore } from "../../app/store"
import type { authSliceState } from "./authSlice"
import {
  authSlice,
  selectAuthUser,
  selectAuthFetchStatus,
  selectAuthLoading,
  selectAuthError,
  selectAuthSuccess,
} from "./authSlice"

interface LocalTestContext {
  store: AppStore
}

describe<LocalTestContext>("counter reducer", it => {
  beforeEach<LocalTestContext>(context => {
    const initialState: authSliceState<{}> = {
      loading: false,
      userInfo: {}, // for user object
      userToken: null, // for storing the JWT
      error: null,
      success: false, // for monitoring the registration process.
      status: "idle",
    }

    const store = makeStore({ auth: initialState })

    context.store = store
  })

  /*it("should handle initial state", () => {
    expect(counterSlice.reducer(undefined, { type: "unknown" })).toStrictEqual({
      value: 0,
      status: "idle",
    })
  })

  it("should handle increment", ({ store }) => {
    expect(selectCount(store.getState())).toBe(3)

    store.dispatch(increment())

    expect(selectCount(store.getState())).toBe(4)
  })

  it("should handle decrement", ({ store }) => {
    expect(selectCount(store.getState())).toBe(3)

    store.dispatch(decrement())

    expect(selectCount(store.getState())).toBe(2)
  })

  it("should handle incrementByAmount", ({ store }) => {
    expect(selectCount(store.getState())).toBe(3)

    store.dispatch(incrementByAmount(2))

    expect(selectCount(store.getState())).toBe(5)
  })*/
})
