/* eslint-disable no-param-reassign */

import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  pets: [],
};

//  Creates a slice called `pets` with an initial state of `initialState`
const pets = createSlice({
  name: "pets",
  initialState,
  reducers: {
    // Creates a reducer called `petsInfos` that takes the state and an action as arguments.
    petsInfos(state: any, action: any) {
      console.log("action", action);
      state.pets = action.payload;
    },

    // Creates a reducer called `petById` that takes the state and an action as arguments.
    petById(state: any, action: any) {
      const res = state.pets.filter((el: any) => {
        return el.id === parseInt(action.payload, 10);
      });
      state.pets = res;
      console.log(JSON.stringify(res));
    },
  },
});

export const { petsInfos, petById } = pets.actions;

export default pets;
