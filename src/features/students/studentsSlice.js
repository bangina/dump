import { createSlice } from "@reduxjs/toolkit";

export const studentsSlice = createSlice({
  name: "students",
  initialState: {
    studentList: [
      { id: 1, text: "Jean" },
      { id: 2, text: "John" },
      { id: 3, text: "Britney" },
    ],
  },
  reducers: {
    addStudent: (state, action) => {
      const newStuent = {
        id: state.studentList.length + 1,
        text: action.payload,
      };
      state.studentList.push(newStuent);
    },
  },
});

export const { addStudent } = studentsSlice.actions;

// THUNK
export const addStudentThunk = (name) => (dispatch) => {
  setTimeout(() => {
    dispatch(addStudent(name));
  }, 1000);
};

export const selectStudent = (state) => state.studentList.value;

export default studentsSlice.reducer;
