import { createSlice } from "@reduxjs/toolkit";

export const tutorsSlice = createSlice({
  name: "tutors",
  initialState: {
    tutorList: [
      { id: 1, text: "Jade" },
      { id: 2, text: "Jina" },
      { id: 3, text: "Alex" },
    ],
  },
  reducers: {
    addtutor: (state, action) => {
      const newStuent = {
        id: state.tutorList.length + 1,
        text: action.payload,
      };
      state.tutorList.push(newStuent);
    },
  },
});

export const { addtutor } = tutorsSlice.actions;

// THUNK
export const addtutorThunk = (name) => (dispatch) => {
  setTimeout(() => {
    dispatch(addtutor(name));
  }, 1000);
};

export const selecttutor = (state) => state.tutorList.value;

export default tutorsSlice.reducer;
