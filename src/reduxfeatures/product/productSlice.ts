import { createAppSlice } from "../../reduxutils/createAppSlice"
import { getAllProducts } from "./productAPI"

export interface productSliceState<Data> {
  loading: boolean
  productsInfo: Data
  success: boolean
  errorProductAll: string | null
  status: "idle" | "loading" | "failed"
}

const initialState: productSliceState<[]> = {
  loading: false,
  productsInfo: [], // for user object
  success: false, // for monitoring the auth login process.
  status: "idle",
  errorProductAll: null,
}

export const productSlice = createAppSlice({
  name: "product",
  initialState,
  reducers: create => ({
    productsFetchAllAsync: create.asyncThunk(
      async () => {
        try {
          const response: any = await getAllProducts()
          return response.data
        } catch (err: any) {
          throw new Error(err)
        }
      },
      {
        pending: state => {
          state.loading = true
          state.status = "loading"
        },
        fulfilled: (state, action) => {
          state.success = true
          state.loading = false
          state.status = "idle"
          state.productsInfo = action.payload
        },
        rejected: (state: any, action: any) => {
          state.success = false
          state.loading = false
          state.status = "failed"
          state.errorProductAll = //
            action && action.error && action.error.message
              ? action.error.message
              : "Please try once again! It looks like the the request rejected!"
        },
      },
    ),
  }),
  // You can define your selectors here. These selectors receive the slice
  // state as their first argument.
  selectors: {
    selectFetchProductsLoading: product => product.loading,
    selectFetchAllProducts: product => product.productsInfo,
    selectFetchAllProductsSuccess: product => product.success,
    selectFetchAllProductsError: product => product.errorProductAll,
  },
})

export const { productsFetchAllAsync } = productSlice.actions

export const {
  selectFetchProductsLoading,
  selectFetchAllProducts,
  selectFetchAllProductsSuccess,
  selectFetchAllProductsError,
} = productSlice.selectors
