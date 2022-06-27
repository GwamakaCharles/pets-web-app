/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';
import { IPets } from 'interfaces';

const initialState = {
  pets: [],
};
const pets = createSlice({
  name: 'pets',
  initialState,
  reducers: {
    petsInfos(state, action) {
      console.log('action', action);
      state.pets = action.payload;
    },
    petById(state, action) {
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
