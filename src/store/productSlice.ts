import {
  createSlice,
  createAsyncThunk,
  AnyAction,
  PayloadAction,
} from "@reduxjs/toolkit";
import axios from "axios";

type Product = {
  id: number;
  image: string;
  name: string;
  type: string;
  quantity: number;
  price: number;
  user: string;
};

type ProductState = {
  products: Product[];
  loading: boolean;
  error: string | null;
};

export const fetchProducts = createAsyncThunk<
  Product[],
  undefined,
  { rejectValue: { message: string } }
>("product/fetchProducts", async function (_, { rejectWithValue }) {
  const url: string = "https://6478b240362560649a2e4a2c.mockapi.io/Goods";
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return rejectWithValue({ message: "Failed to fetch products" });
  }
});

const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

function isError(action: AnyAction) {
  return action.type.endsWith("rejected");
}

export default productSlice.reducer;
