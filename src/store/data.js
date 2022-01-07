import { createSlice } from "@reduxjs/toolkit";

// Se o initialState não for um Objeto ou Array,// é necessário retornar o estado sem mutar o mesmo

const slice = createSlice({
  name: "data",
  initialState: {
    data: null,
  },
  reducers: {
    addFormdata(state, action) {
      state.data = action.payload;
      console.log(action.payload);
    },
  },
});

export const { addFormdata } = slice.actions;
export default slice.reducer;
