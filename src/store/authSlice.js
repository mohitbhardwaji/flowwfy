import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user:JSON.parse(localStorage.getItem("user"))  || {},
  token: localStorage.getItem("token") || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      console.log(action)
      state.token = action.payload.access_token;
      state.user = {
        user_id: action.payload.payload.sub,
        email: action.payload.payload.email,
      };
      localStorage.setItem("token", state.token);
      localStorage.setItem("user",JSON.stringify(state.user))
    },
    logout: (state) => {
      state.user = {};
      state.token = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
    // setUserDetails: (state, action) => {
    //   state.user_id = action.payload.userId;
    //   state.email = action.payload.email;
    //   localStorage.setItem("user_id", action.payload.userId);
    //   localStorage.setItem("email", action.payload.email);
    // },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
