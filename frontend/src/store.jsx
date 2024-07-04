import { configureStore } from "@reduxjs/toolkit";
import { userLoginReducer, userRegisterReducer } from "./reducers/userReducer";
import {
  noteCreateReducer,
  noteDeleteReducer,
  noteListReducer,
  noteUpdateReducer,
} from "./reducers/notesReducer";

// Function to load userInfo from local storage
const userInfoLocalStorage = () => {
  try {
    const userInfoString = localStorage.getItem("userInfo");
    return userInfoString ? JSON.parse(userInfoString) : null;
  } catch (error) {
    console.error("Error loading user info from local storage:", error);
    return null;
  }
};

const store = configureStore({
  reducer: {
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    noteList: noteListReducer,
    noteCreate: noteCreateReducer,
    noteUpdate: noteUpdateReducer,
    noteDelete: noteDeleteReducer,
  },
  preloadedState: {
    userLogin: {
      userInfo: userInfoLocalStorage(),
      loading: false,
      error: null,
    },
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
